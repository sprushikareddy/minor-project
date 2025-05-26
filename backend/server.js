// backend/server.js

/*
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();  // ✅ Create app first

app.use(express.json());  // ✅ Very important! allow JSON body parsing

const authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);  // ✅ Use routes

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB Connection Failed:', error.message);
  });*/


  // backend/server.js
  const express = require("express");
const path = require("path");
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = require('./app');  // ✅ Import from app.js
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB Connection Failed:', error.message);
  });

  const User = require('./models/user');

  (async () => {
    await User.deleteMany({});
    console.log('✅ All users deleted from database.');
  })();
  
