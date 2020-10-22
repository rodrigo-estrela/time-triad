const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = new Schema({
  c0: { type: Number, default: 0 },
  c1: { type: Number, default: 0 },
  c2: { type: Number, default: 0 },
  c3: { type: Number, default: 0 },
  c4: { type: Number, default: 0 },
  c5: { type: Number, default: 0 },
  i0: { type: Number, default: 0 },
  i1: { type: Number, default: 0 },
  i2: { type: Number, default: 0 },
  i3: { type: Number, default: 0 },
  i4: { type: Number, default: 0 },
  i5: { type: Number, default: 0 },
  u0: { type: Number, default: 0 },
  u1: { type: Number, default: 0 },
  u2: { type: Number, default: 0 },
  u3: { type: Number, default: 0 },
  u4: { type: Number, default: 0 },
  u5: { type: Number, default: 0 },
});

const timeTriadSchema = new Schema({
  done: { type: Boolean, default: false },
  quiz: { type: quizSchema, default: {} },
  importante: { type: Number, default: 0 },
  urgente: { type: Number, default: 0 },
  circunstancial: { type: Number, default: 0 },
  model: { type: String, default: "" },
});

const userSchema = new Schema({
  googleId: String,
  name: String,
  email: String,
  picture: String,
  role: { type: String, default: "user" },
  timeTriad: { type: timeTriadSchema, default: {} },
});

mongoose.model("users", userSchema);
