const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  id: String,
  group: String,
  description: String,
});

mongoose.model("questions", questionSchema);

module.exports = questionSchema;
