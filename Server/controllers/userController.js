const User = require("../models/user");
const validator = require('validator');
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const secretKey = '65JymYzDDqqLW8Eg';

exports.userSignUp = async (req, res) => {
  const { email, password, fullName, phoneNumber } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json({
      error: true,
      error_msg: "Email already exists",
    });
  }
  // Validate email
  if (!validator.isEmail(email)) {
    return res.json({
      error: true,
      error_msg: "Invalid email address",
    });
  }


  try {
    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = new User({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,

    });

    const response = await user.save();
    res.json({
      error: false,
      success_msg: "Signup successful",
      response: response,
    });
  } catch (err) {
    res.json({
      error: true,
      error_msg: "Something went wrong...!",
      response: err.toString(),
    });
  }
};

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: true,
        error_msg: "User not found!",
      });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.json({
        error: true,
        error_msg: "Invalid password",
      });
    }

    const response = await User.findById({ _id: user._id }, { password: 0 })
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({
      error: false,
      success_msg: "Login successfully",
      response: response,
      token: token
    });
  } catch (error) {
    res.json({
      error: true,
      error_msg: "Something went wrong...!",
      response: err.toString(),
    });
  }

};