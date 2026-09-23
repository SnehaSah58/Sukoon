const express = require("express");

const {
  createExperience,
} = require("../controllers/experienceController");

const router = express.Router();

router.post("/", createExperience);

module.exports = router;