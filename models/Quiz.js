const mongoose = require("mongoose");
const { Schema } = mongoose;
const questionSchema = require("./Question");

const quizSchema = new Schema({
  userId: String,
  c0: Number,
  c1: Number,
  c2: Number,
  c3: Number,
  c4: Number,
  c5: Number,
  i0: Number,
  i1: Number,
  i2: Number,
  i3: Number,
  i4: Number,
  i5: Number,
  u0: Number,
  u1: Number,
  u2: Number,
  u3: Number,
  u4: Number,
  u5: Number,
});

mongoose.model("quiz", quizSchema);
