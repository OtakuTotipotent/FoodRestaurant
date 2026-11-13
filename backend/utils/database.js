const mongoose = require("mongoose");
const { MONGODB_CONNECTION_STRING } = require("../configs/index");

async function connectDB() {
  try {
    const conn = await mongoose.connect(MONGODB_CONNECTION_STRING);
    console.log(
      `Database Connection Successful. Host: ${conn.connection.host}`,
    );
  } catch (error) {
    console.log(`Database Connection Failed. ${error}`);
  }
}

module.exports = connectDB;
