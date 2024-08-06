const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: '*', // Adjust to specific domains as needed
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Your routes here

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
