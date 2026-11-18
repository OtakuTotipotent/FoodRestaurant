const express = require("express");
const auth = require("../middlewares/auth");
const productController = require("../controllers/product");

// init
const router = express.Router();

// Show all products
router.get("/", productController.showAll);

// Show one product
router.get("/:id", productController.showById);

// Create new product
router.post("/", auth, productController.create);

// Update product
router.patch("/:id", auth, productController.update);

// Delete product
router.delete("/:id", auth, productController.delete);

module.exports = router;
