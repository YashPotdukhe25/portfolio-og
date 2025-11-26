import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

async function saveToGoogleSheets(data: any) {
  try {
    // Get Google Sheets credentials from Replit integrations
    const sheetsId = process.env.GOOGLE_SHEETS_ID;
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
    
    if (!sheetsId || !apiKey) {
      console.log("Google Sheets not configured yet");
      return;
    }

    // Append row to Google Sheet using Google Sheets API v4
    const range = "Sheet1!A:C"; // Columns: Name, Email, Message
    const values = [[data.name, data.email, data.message, new Date().toISOString()]];
    
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetsId}/values/${range}:append?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: values,
          majorDimension: "ROWS",
        }),
      }
    );

    if (!response.ok) {
      console.error("Failed to save to Google Sheets:", response.statusText);
      return;
    }

    console.log("Successfully saved to Google Sheets");
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    // Continue even if Google Sheets fails - local storage still works
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ 
          message: "Invalid request",
          errors: parsed.error.errors 
        });
      }

      // Save to local storage
      const contactMessage = await storage.saveContactMessage(parsed.data);
      
      // Also try to save to Google Sheets (if configured)
      await saveToGoogleSheets(parsed.data);

      res.status(201).json({ 
        success: true, 
        message: "Message saved successfully",
        data: contactMessage 
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all contact messages (optional admin endpoint)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ data: messages });
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}