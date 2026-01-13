const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected Successfully");
  } catch (err) {
    console.log("Error in Connecting Database");
  }
}

module.exports = connectToDB;
