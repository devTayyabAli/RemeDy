const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const dbConnection = require("./connection/db");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/user", userRoutes);
let PATH = process.env.PORT || 3344;

app.get("/", (req, res) => {
  res.send("server running fine 🏃‍♂️");
});
let server = app.listen(PATH, () => {
  dbConnection();
  console.log(`Server listening at http://localhost:${PATH}`);
})
process.on('unhandledRejection', error => {
  console.log(error.message);
  server.close(() => process.exit(1));
});







