const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("");
    console.log("Database connection successful.");
  } catch (error) {
    console.error(`Database connection failed. Error: ${error}`);
  }
};

module.exports = connectDatabase;
