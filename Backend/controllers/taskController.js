const Task = require("../models/taskModel");

exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.postTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }
    if (!dueDate) {
      return res.status(400).json({
        message: "Due date is required",
      });
    }
    const task = await Task.create({
      title,
      description,
      dueDate,
      completed: false,
    });
    res.status(201).json({
      message: "Task Created Successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Task Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.toggleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    task.completed = !task.completed;
    await task.save();
    res.status(200).json({
      message: "Task Toggled Successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }
    if (!dueDate) {
      return res.status(400).json({
        message: "Due date is required",
      });
    }
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        dueDate,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "Task Updated Successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
       message: error.message,
    });
  }
};