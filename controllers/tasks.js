const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      tasks,
    });
  } catch (e) {
    res.status(500).json({
      msg: e,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      completed: false,
      name: req.body.name,
    });

    res.status(201).json(task);
  } catch (e) {
    res.status(500).json({
      msg: e,
    });
  }
}

const getTask = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const task = await Task.findOne({ _id });

    if (!task) {
      return res.status(404).json({
        msg: `Task not found with id ${_id}`,
      })
    }

    res.status(200).json({
      task,
    });
  } catch (e) {
    res.status(500).json({
      msg: e,
    });
  }
}

const updateTask = (req, res) => {
  res.json(req.body);
}

const deleteTask = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const task = await Task.findOneAndDelete({ _id });

    if (!task) {
      return res.status(404).json({
        msg: `Task not found with id ${_id}`,
      })
    }

    res.status(200).json({ msg: 'Deleted successfully.' });
  } catch (e) {
    res.status(500).json({
      msg: e,
    });
  }
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
