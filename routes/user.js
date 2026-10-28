const path = require("path");
const express = require("express");
const rootDir = require("../utils/rootDir");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views/index.html"));
});

router.get("/cart", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views/cart.html"));
});

module.exports = router;
