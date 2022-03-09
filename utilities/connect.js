const mongoose = require("mongoose");
const keys = require("../config/keys");

module.exports = async function connect() {
  try {
    // const url = 'mongodb://127.0.0.1:27017/wilderdb'
    const url = await mongoose.connect(keys.MONGO_URI);
    console.log("Connected sucessfully to MongoDB");
  } catch (err) {
    console.error(err.message);
  }
};
