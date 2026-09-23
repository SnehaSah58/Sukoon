const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    mood: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    privacy: {
      type: String,
      enum: ["private", "anonymous"],
      default: "private",
    },
  },
  {
    timestamps: true,
  }
);

const Experience = mongoose.model(
  "Experience",
  experienceSchema
);

module.exports = Experience;