// notFound.ts
// Runs when no route matches the request, and replies with a 404 message

import { Request, Response } from "express";

// STEP 4 : Handle unknown URLs and errors
// Runs when no route matched: replies 404 as JSON. errorHandlers.ts (same step) turns any thrown error into a JSON reply instead of crashink

export const notFound = (req: Request, res: Response) => {
  res
    .status(404)
    .json({ message: `Not found: ${req.method} ${req.originalUrl}` });
};

// STEP 5 (join the routes and add a health check) -> server/src/routes/index.ts
