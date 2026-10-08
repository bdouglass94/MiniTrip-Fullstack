import express from "express";

const app = express(); 

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("MiniTrip backend running on port 3000");
});
