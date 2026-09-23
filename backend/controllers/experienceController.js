const Experience = require("../models/Experience");

const createExperience = async (req, res) => {
  try {
    const { mood, experience, privacy } = req.body;

    const newExperience = await Experience.create({
      mood,
      experience,
      privacy,
    });

    res.status(201).json({
      message: "Experience saved successfully 🌙",
      experience: newExperience,
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to save experience",
      error: error.message,
    });
  }
};

module.exports = {
  createExperience,
};