// app.js
const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from ECS', 
    version: process.env.VERSION || '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
