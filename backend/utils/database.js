const mongoose = require("mongoose");
const { MONGODB_CONNECTION_STRING } = require("../configs/index");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_CONNECTION_STRING, {
      dbName: "FoodRest",
    });
    console.log("MongoDB database connection successful.");
  } catch (error) {
    console.log(`MongoDB database connection failed. ${error}`);
    throw error;
  }
};

module.exports = connectDB;
