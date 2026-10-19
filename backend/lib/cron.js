
const { CronJob } = require("cron");
const https = require("https");
const http = require("http");

const job = new CronJob("*/14 * * * *", function () {
  const base = process.env.RENDER_EXTERNAL_URL;

  if (!base) {
    console.log("Render URL not configured. Cron skipped.");
    return;
  }

  const url = new URL("/health", base);
  const client = url.protocol === "https:" ? https : http;

  const request = client.get(url, (response) => {
    console.log("Health check status:", response.statusCode);
    response.resume();
  });

  request.on("error", (error) => {
    console.error("Health check failed:", error.message);
  });
});

module.exports = job;
