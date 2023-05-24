require("dotenv").config();
const mongoose = require("mongoose");
let { MONGO_CONN_URL } = process.env;

mongoose.connect(MONGO_CONN_URL).then(
  (result) => {
    console.log(
      `Successfully connected to Database ${result.connections[0].name}`
    );
  },
  (err) => {
    console.log(`Failed to connect Database ${err.message}`);
  }
);

module.exports = mongoose;
