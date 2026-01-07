const Task = require("../models/Task");

exports.getAllTasks = async (req, res) => {
  const { status, priority, sortBy } = req.query;

  let query = {};
  if (status) {
    query.status = status;
  }
  if (priority) {
    query.priority = priority;
  }

  let tasks = Task.find(query);
  if (sortBy) {
    tasks.sort(sortBy);
  }

  const data = await tasks;

  res.json({ success: true, count: data.length, data });
};

exports.getSingleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(400).json({
      success: false,
      message: "Task Not Found",
    });
  }

  res.json({ success: true, data: task });
};

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);

  res.status(201).json({
    success: true,
    message: "Task Created Successfully..",
    data: task,
  });
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  res.json({
    success: true,
    message: "Task deleted Successfully",
  });
};
