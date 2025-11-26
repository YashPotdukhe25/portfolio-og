// This is the Vercel entry point that bundles all server code together
import fs from "node:fs";
import { type Server } from "node:http";
import path from "node:path";
import express from "express";

// Import all server modules
import runApp from "./app";

export async function serveStatic(app: express.Application, server: Server) {
  const distPath = path.resolve(import.meta.dirname, "../dist/public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

(async () => {
  await runApp(serveStatic);
})();