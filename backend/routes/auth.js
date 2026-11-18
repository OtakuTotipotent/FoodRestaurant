const express = require("express");
const authController = require("../controllers/auth");
const auth = require("../middlewares/auth");

// init
const router = express.Router();

// Create or register new user
router.post("/signup", authController.signup);

// Login or signin a user
router.post("/signin", authController.signin);

// Logout or signout the user
router.post("/signout", auth, authController.signout);

// Refresh user tokens
router.get("/refresh", authController.refresh);

// Show all users
// router.get("/users", authController.showAll);

// Show one user
// router.get("/users/:id", authController.showOne);

// Update a user
// router.put("/users/:id", authController.update);

// delete a user
// router.delete("/users/:id", authController.delete);

// exports
module.exports = router;
