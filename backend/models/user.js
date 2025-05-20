/*// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollno: { type: String, required: true, unique: true }, */
  /*email: {
    type: String,
    required: true,
    unique: true,
  },*//*
  role: {
    type: String,
    enum: ['student', 'parent', 'warden', 'security', 'admin'],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollno: { 
    type: String, 
    required: true, 
    //unique: true 
  },
  role: {
    type: String,
    enum: ['student', 'parent', 'warden', 'security', 'admin','employee'],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {           // ✅ add this line
    type: String,
    required: function() {
      return this.role === 'parent'; // Only required for parent role
    }
  },
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

module.exports = User;
