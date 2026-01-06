const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Task = require("./models/Task");

const app = express();

// ================= Middleware =================
app.use(cors());
app.use(express.json());

// ================= MongoDB Connection =================
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

// ================= Routes =================

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Task Management Backend Running Successfully");
});

// CREATE TASK
app.post("/api/tasks", async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = new Task({
      title,
      description,
    });

    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.error("🔥 Error saving task:", error.message);
    res.status(500).json({ message: "Error creating task" });
  }
});

// UPDATE TASK
app.put("/api/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description },
      { new: true } // updated document return करतो
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error.message);
    res.status(500).json({ message: "Error updating task" });
  }
});
// DELETE TASK
app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({
      message: "Task deleted successfully ❌",
      deletedTask,
    });
  } catch (error) {
    console.error("Error deleting task:", error.message);
    res.status(500).json({ message: "Error deleting task" });
  }
});


// GET ALL TASKS
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
});

// ================= Server Start =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 http://localhost:${PORT}`);
});
