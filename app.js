const express = require('express');

const app = express();

// routes
app.get('/hello', (req, res) => {
  res.send('Task manager app');
})

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port} ...`);
});
