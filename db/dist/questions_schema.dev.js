"use strict";

var mongoose = require("mongoose");

var questions = new mongoose.Schema({
  userid: String,
  question: String
});
module.exports = mongoose.model("questions", questions);