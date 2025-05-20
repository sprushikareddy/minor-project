// backend/app.js

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const outpassRoutes = require('./routes/outpassRoutes');



const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/outpass', outpassRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('🚀 OutPass API is running...');
});

module.exports = app;



