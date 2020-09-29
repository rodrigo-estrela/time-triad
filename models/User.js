const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  timeTriad: { type: Boolean, default: false },
});

mongoose.model("users", userSchema);
