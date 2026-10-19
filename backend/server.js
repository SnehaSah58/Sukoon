const dns = require("dns");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const cronJob = require("./lib/cron");

require("dotenv").config();

const experienceRoutes = require("./routes/experienceRoutes");

dns.setServers(["8.8.8.8"]);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/experiences", experienceRoutes);

// Health endpoint for scheduled checks
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Sukoon is healthy 🌙",
  });
});

// Frontend production build
const frontendPath = path.join(__dirname, "../frontend/dist");

if (fs.existsSync(frontendPath)) {
  app.use(express.static(frontendPath));

  // React Router support
  app.use((req, res, next) => {
    if (req.method !== "GET" || req.path.startsWith("/api")) {
      return next();
    }

    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// Backend health check
app.get("/", (req, res) => {
  res.send("Sukoon backend is running 🌙");
});


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB connected successfully 🌙");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
      cronJob.start();
      console.log("Cron job started 🌙");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });