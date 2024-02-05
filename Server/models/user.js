const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [false, "Password is required"],
  },
  phoneNumber: {
    type: String,
  },

});
//for password
userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error(error);
  }
};
const User = mongoose.model("RemeDyUser", userSchema);
module.exports = User;
