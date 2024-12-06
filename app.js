const express = require('express');
const app = express();
const tasks = require('./routes/task');
const connectDb = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);

    app.listen(port, () => {
      console.log(`Server is running on port ${port} ...`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
