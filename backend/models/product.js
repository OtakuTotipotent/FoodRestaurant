const mongoose = require("mongoose");

const { Schema } = mongoose;

const foodProductSchema = new Schema(
  {
    pid: { type: String, required: false, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    description: { type: String, required: true },
    price: {
      type: Number,
      required: true,
      min: [0, "Price cannot be negative"],
    },
    size: {
      type: String,
      required: true,
      enum: ["Small", "Medium", "Large", "Extra"],
    },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model(
  "FoodProduct",
  foodProductSchema,
  "FoodProduct",
);
