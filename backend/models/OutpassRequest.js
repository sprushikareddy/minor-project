// backend/models/OutpassRequest.js

const mongoose = require('mongoose');

const outpassRequestSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  studentRollno: {
    type: String,
    required: true,
  },
  
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  destination: {               // ✅ NEW field
    type: String,
    required: true,
  },
  parentApproved: {
    type: Boolean,
    default: false,
  },
  wardenApproved: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['Pending', 'Parent Approved', 'Approved by Warden', 'Rejected'],
    default: 'Pending',
  },
}, { timestamps: true });

const OutpassRequest = mongoose.model('OutpassRequest', outpassRequestSchema);

module.exports = OutpassRequest;
