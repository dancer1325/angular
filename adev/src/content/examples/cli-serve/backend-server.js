const express = require('express');
const app = express();

app.get('/api/test', (req, res) => {
  res.json({ message: 'Proxy working!', timestamp: new Date() });
});

app.listen(3000, () => {
  console.log('Backend server running on http://localhost:3000');
});