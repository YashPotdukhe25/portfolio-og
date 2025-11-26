import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

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

      const contactMessage = await storage.saveContactMessage(parsed.data);
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