const fs = require("fs");
const Joi = require("joi");
const FoodProduct = require("../models/product");
const { BACKEND_SERVER_PATH } = require("../configs/index");
const FoodProductDTO = require("../utils/productDTO");

const productController = {
  // Create new product
  async create(req, res, next) {
    try {
      // Validate input
      const productCreationSchema = Joi.object({
        title: Joi.string().trim().min(3).max(30).required(),
        category: Joi.string().trim().min(3).max(30).required(),
        description: Joi.string().trim().max(100).required(),
        quantity: Joi.number().min(0).required(),
        price: Joi.number().min(0).required(),
        size: Joi.string().trim().min(5).required(),
        isAvailable: Joi.boolean().required(),
        image: Joi.string().required(),
      });

      const { error, value } = productCreationSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      if (error) {
        return next(error);
      }

      // Get values
      const {
        title,
        category,
        description,
        quantity,
        price,
        size,
        isAvailable,
        image,
      } = value;

      const imgBuffer = Buffer.from(
        image.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
        "base64",
      );

      const imagePath = `${Date.now()}-${title.toLowerCase()}.png`;
      fs.writeFileSync(`public/uploads/${imagePath}`, imgBuffer);

      // Save to database
      const foodProduct = await FoodProduct.create({
        title,
        category,
        description,
        quantity,
        price,
        size,
        isAvailable,
        imagePath: `${BACKEND_SERVER_PATH}/public/uploads/${imagePath}`,
      });

      // Send safe response
      const foodProductDto = new FoodProductDTO(foodProduct);
      return res.status(201).json({
        message: "New food product created successfully",
        product: foodProductDto,
      });

      // Handle errors
    } catch (error) {
      return next(error);
    }
  },

  // Show all products
  async showAll(req, res, next) {
    try {
      // Get all products from db
      const foodProducts = await FoodProduct.find({});
      // TODO: check if there is no product in database

      const foodProductDto = [];

      for (let i = 0; i < foodProducts.length; i++) {
        const dto = new FoodProductDTO(foodProducts[i]);
        foodProductDto.push(dto);
      }

      // Send safe response
      res.status(200).json({
        message: "All food products available are fetched.",
        products: foodProductDto,
      });
    } catch (error) {
      return next(error);
    }
  },

  // Show one product
  async showById(req, res, next) {
    try {
      // Validate input
      const showByIdSchema = Joi.object({
        id: Joi.string().trim().required(),
      });

      const { error, value } = showByIdSchema.validate(req.params, {
        abortEarly: false,
        stripUnknown: true,
      });

      if (error) {
        return next(error);
      }

      // Query database
      const { id } = value;
      let foodProduct;
      try {
        foodProduct = await FoodProduct.findById(id);
        if (!foodProduct) {
          return next({
            status: 404,
            message: "Product not found.",
          });
        }
      } catch (error) {
        return next({
          status: 403,
          message: "Error: Given id is invalid.",
        });
      }

      // Send safe response
      const foodProductDto = new FoodProductDTO(foodProduct);
      res.status(200).json({
        message: "Desired FoodRest product fetched successfully",
        product: foodProductDto,
      });
    } catch (error) {
      return next(error);
    }
  },

  // Update a product
  async update(req, res, next) {
    res.status(200).json({
      message: "Testing... Update a product",
    });
  },

  // Delete a product
  async delete(req, res, next) {
    res.status(200).json({
      message: "Testing... Delete a product",
    });
  },
};

module.exports = productController;
