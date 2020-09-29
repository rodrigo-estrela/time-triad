const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  group: String,
  description: String,
});

mongoose.model("questions", questionSchema);
