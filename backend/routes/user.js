const express = require("express");
const authController = require("../controllers/auth");

// init
const router = express.Router();

// paths
router.post("/login", authController.login);

router.post("/signup", authController.signup);

// exports
module.exports = router;
