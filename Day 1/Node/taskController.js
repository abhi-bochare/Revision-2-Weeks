const data = require("./data");

exports.createTask = (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description required" });
  }

  const newTask = {
    id: data.currentId++,
    title,
    description,
    status: status || "pending",
  };

  data.tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.getAllTasks = (req, res) => {
  res.status(200).json(data.tasks);
};

exports.getTaskById = (req, res) => {
  const id = Number(req.params.id);
  const task = data.tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json(task);
};

exports.updateTask = (req, res) => {
  const id = Number(req.params.id);
  const { title, description, status } = req.body;

  const task = data.tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (title) task.title = title;
  if (description) task.description = description;
  if (status) task.status = status;

  res.status(200).json(task);
};

exports.deleteTask = (req, res) => {
  const id = Number(req.params.id);
  const index = data.tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  data.tasks.splice(index, 1);
  res.status(204).send();
};
