const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Basic route to test server setup
app.get('/', (req, res) => {
  res.send('Sports Event App Backend');
});

const PORT = process.env.PORT || 5000;  // Set the server port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);  // Confirm server is running
});
