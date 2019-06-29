const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  description: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Posts", PostSchema);
