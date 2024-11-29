const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Name is required"]
  },
  employeeid: {
    type: String,
    required: [true, "Employee ID is required"]
  },
  from: {
    type: Date,
    required: [true, "From date is required"]
  },
  to: {
    type: Date,
    required: [true, "To date is required"]
  },
  description: {
    type: String, // Use [String] if you need an array of strings
    required: [true, "Description is required"]
  }
});

module.exports = mongoose.model('Leave', LeaveSchema);
