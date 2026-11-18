const express = require("express");
const authController = require("../controllers/auth");
const auth = require("../middlewares/auth");

// init
const router = express.Router();

// paths
router.post("/signup", authController.signup);

router.post("/signin", authController.signin);

router.post("/signout", auth, authController.signout);

router.get("/refresh", authController.refresh);

// exports
module.exports = router;
