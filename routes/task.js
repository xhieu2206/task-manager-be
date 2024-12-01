const express = require('express');
const { getAllTasks, updateTask, getTask, createTask, deleteTask,  } = require('../controllers/tasks');
const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
