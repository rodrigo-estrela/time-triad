const mongoose = require("mongoose");
const { Schema } = mongoose;

const answerSchema = new Schema({
  userId: String,
  important: Array,
  urgent: Array,
  circumstantial: Array,
});

mongoose.model("answers", answerSchema);
