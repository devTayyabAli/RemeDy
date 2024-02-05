const mongoose = require("mongoose");

// Define the schema for the follow relationship
const followSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  ssn: { type: String, required: true },
  dob: { type: Date, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  mobilePhone: { type: String, required: true },
  alternate: { type: String, enum: ["work", "home", "spouse", "other"] },
  email: { type: String, required: true },
  driversLicense: { type: String, required: true },
  dlIssueDate: { type: Date, required: true },
  occupation: { type: String, required: true },
  status: { type: String, enum: ["married", "single"], required: true },
  feeLock: { type: String, enum: ["yes", "no"], required: true },
  irsIpPin: { type: String },
});
// Create the model
const Follow = mongoose.model("Follow", followSchema);

// Export the model for use in your API
module.exports = Follow;
