

// create db connection
const mongoose = require("mongoose");


const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DATABASE_URL);
    console.log("database connected successfully");
  } catch (e) {
    console.error("error while connect db",e);
  }
};

module.exports = dbConnection;


