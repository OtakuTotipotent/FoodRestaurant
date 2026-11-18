const mongoose = require("mongoose");

const { Schema } = mongoose;

const foodProductSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, min: 0 },
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
    isAvailable: { type: Boolean, default: true },
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
