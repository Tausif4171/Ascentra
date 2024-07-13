import mongoose, { Schema } from "mongoose";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}

const taskSchema = new Schema(
  {
    title: String,
    description: String,
    status: String,
    progress: Number,
    priority: Number,
    category: String,
    // active: Boolean,
  },
  {
    timestamps: true,
  }
);

// Check if the model is already defined to prevent OverwriteModelError
const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;
