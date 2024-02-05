const Follow = require("../models/follow");

exports.createFollow = async (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    ssn,
    dob,
    address,
    city,
    state,
    zip,
    mobilePhone,
    alternate,
    email,
    driversLicense,
    dlIssueDate,
    occupation,
    status,
    feeLock,
    irsIpPin,
  } = req.body;

  const follows = new Follow({
    firstName,
    middleName,
    lastName,
    ssn,
    dob,
    address,
    city,
    state,
    zip,
    mobilePhone,
    alternate,
    email,
    driversLicense,
    dlIssueDate,
    occupation,
    status,
    feeLock,
    irsIpPin,
  });
  try {
    const response = await follows.save();
    res.json({
      error: false,
      success_msg: "Data submitted successfully",
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

exports.getAllFollow = async (req, res) => {
  try {
    const follow = await Follow.find();
    if (follow.length !== 0) {
      res.json({ error: false, follow: follow });
    } else {
      res.json({
        error: true,
        error_msg: "No data found...!",
      });
    }
  } catch (err) {
    res.json({
      error: true,
      error_msg: "Something went wrong...!",
      response: err.toString(),
    });
  }
};

exports.getFollowById = async (req, res) => {
  try {
    const follow = await Follow.findById(req.params.id);
    if (follow) {
      res.json({ error: false, follow: follow });
    } else {
      res.json({
        error: true,
        error_msg: "No Data Found",
      });
    }
  } catch (err) {
    res.json({
      error: true,
      error_msg: "No Data Found",
      response: err.toString(),
    });
  }
};

exports.updateFollowById = async (req, res) => {
  try {
    const {
      firstName,  middleName,  lastName,  ssn,dob,  address,  city,  state,  zip,  mobilePhone,  alternate,  email, driversLicense,  dlIssueDate,
      occupation, status, feeLock, irsIpPin, } = req.body;
    const follows = await Follow.updateOne(
      { _id: req.params.id },

      {
        $set: {
          firstName,
          middleName,
          lastName,
          ssn,
          dob,
          address,
          city,
          state,
          zip,
          mobilePhone,
          alternate,
          email,
          driversLicense,
          dlIssueDate,
          occupation,
          status,
          feeLock,
          irsIpPin,
        },
      }
    );

    if (follows) {
      res.json({
        error: false,
        success_msg: "Data updated successfully",
        follows: follows,
      });
    } else {
      res.json({
        error: true,
        error_msg: "No Data Found",
      });
    }
  } catch (err) {
    res.json({
      error: true,
      error_msg: "Something went wrong...!",
      response: err.toString(),
    });
  }
};

exports.deleteFollowById = async (req, res) => {
  try {
    const follow = await Follow.findByIdAndDelete(req.params.id);

    if (follow) {
      res.json({ error: false, success_msg: "follow deleted successfully" });
    } else {
      res.json({
        error: true,
        error_msg: "No Data Found",
      });
    }
  } catch (err) {
    res.json({
      error: true,
      error_msg: "Something went wrong...!",
      response: err.toString(),
    });
  }
};
