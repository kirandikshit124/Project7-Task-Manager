const Task = require("../model/taskModel");

exports.getTasks = (req, res, next) => {
    Task.fetchAll((tasks) => {
        res.status(200).json(tasks);
    });
};

exports.postTask = (req, res, next) => {
    const { title, description, dueDate } = req.body;
    if (!title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }
    if (!dueDate) {
        return res.status(400).json({
            message: "Due date is required"
        });
    }
    const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate,
        completed: false
    };
    Task.saveTask(newTask, () => {
        res.status(201).json({
            message: "Task Created Successfully",
            task: newTask
        });
    });
};

exports.deleteTask = (req, res, next) => {
    const taskId = req.params.id;
    Task.deleteTask(taskId, () => {
        res.status(200).json({ message: "Task Deleted Successfully" });
    });
}

exports.toggleTask = (req, res, next) => {
    const taskId = req.params.id;
    Task.toggleTask(taskId, () => {
        res.status(200).json({ message: "Task Toggled Successfully" });
    });
}

exports.updateTask = (req, res, next) => {
    const taskId = req.params.id;
    const updatedData = req.body;
    if (!updatedData.title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }
    if (!updatedData.dueDate) {
        return res.status(400).json({
            message: "Due date is required"
        });
    }
    Task.updateTask(taskId, updatedData, () => {
        res.status(200).json({ message: "Task Updated Successfully" });
    });
}