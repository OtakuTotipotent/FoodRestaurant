const express = require("express");

const router = express.Router();
const data = [];

router.get("/", (req, res, next) => {
  res.render("admin", { page_title: "Admin Panel" });
});

router.post("/cart/add", (req, res, next) => {
  data.push(req.body);
  console.log(data);
  res.render("success", { page_title: "Item Added" });
});

module.exports = router;
