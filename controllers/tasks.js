const getAllTasks = (req, res) => {
  res.send('Get tasks');
};

const createTask = (req, res) => {
  res.send('create task');
}

const getTask = (req, res) => {
  res.send('Get task');
}

const updateTask = (req, res) => {
  res.send('Update task');
}

const deleteTask = (req, res) => {
  res.send('Delete task');
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
