const dns = require("dns");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

dns.setServers(["8.8.8.8"]);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully ");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });


// Test route
app.get("/", (req, res) => {
  res.send("Sukoon backend is running 🌙");
});