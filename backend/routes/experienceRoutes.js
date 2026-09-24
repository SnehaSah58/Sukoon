const express = require("express");

const {
  createExperience,
  getPublicExperiences,
} = require("../controllers/experienceController");
const router = express.Router();
router.post("/", createExperience);
router.get("/public", getPublicExperiences);
module.exports = router;