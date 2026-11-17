const express = require("express");
const authController = require("../controllers/auth");

// init
const router = express.Router();

// paths
router.post("/signup", authController.signup);

router.post("/login", authController.login);

// exports
module.exports = router;
