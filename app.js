const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Interns! Welcome to containerization with Podman and Kubernetes!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
