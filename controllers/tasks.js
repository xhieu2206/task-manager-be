const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  res.json({
    ...req.body,
  });
};

const createTask = async (req, res) => {
  const task = await Task.create({
    completed: false,
    name: req.body.name,
  });

  res.status(201).json(task);
}

const getTask = (req, res) => {
  res.json({
    id: req.params.id,
  });
}

const updateTask = (req, res) => {
  res.json(req.body);
}

const deleteTask = (req, res) => {
  res.json({
    id: req.params.id,
  });
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
