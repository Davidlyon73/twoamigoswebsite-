const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Google API Key
const API_KEY = "AIzaSyBjYgwn-KmMAXkHS5aJYt45t3S3Fzmfbcw";

// Endpoint to fetch Google Place Details
app.get("/api/place-details", async (req, res) => {
  const placeId = req.query.place_id;

  if (!placeId) {
    return res.status(400).json({ error: "Missing place_id parameter" });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching Google Place Details:", error.message);
    res.status(500).json({ error: "Failed to fetch data from Google API" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});