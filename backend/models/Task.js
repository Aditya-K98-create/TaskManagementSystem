const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,   // 👈 फक्त हे required आहे
    },
    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,  // createdAt, updatedAt auto
  }
);

module.exports = mongoose.model("Task", taskSchema);
