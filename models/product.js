const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
  },
  size: {
    type: String,
    required: [true, "Product size is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Product price can not less than 0"],
  },
  quantity: {
    type: Number,
    required: [true, "Product quantity is required"],
    min: [0, "Product quantity can not be less than 0"],
  },
  tag: {
    type: [String],
    required: [true, "Product tag is required, at least 1"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
