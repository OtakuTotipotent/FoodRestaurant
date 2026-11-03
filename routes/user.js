const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { page_title: "Home" });
});

router.get("/cart", (req, res, next) => {
  res.render("cart", { page_title: "Cart" });
});

module.exports = router;
