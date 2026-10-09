import express from "express";

// Create the Express server that handles API requests for the MiniTrip app.
const app = express();

// Health check endpoint used by the frontend to confirm the backend is running.
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Start listening on the backend port so the client can connect to the API.
app.listen(3000, () => {
  console.log("MiniTrip backend running on port 3000");
});
