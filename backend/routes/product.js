const express = require("express");
const auth = require("../middlewares/auth");
const authorize = require("../middlewares/authorize");
const productController = require("../controllers/product");

const router = express.Router();

// Public routes
router.get("/", productController.showAll);

router.get("/:id", productController.showById);

// Admin-only routes
router.post("/", auth, authorize("admin"), productController.create);

router.put("/:id", auth, authorize("admin"), productController.update);

router.delete("/:id", auth, authorize("admin"), productController.delete);

module.exports = router;
