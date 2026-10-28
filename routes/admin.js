const path = require("path");
const express = require("express");
const rootDir = require("../utils/rootDir");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views/admin.html"));
});

router.post("/cart/add", (req, res, next) => {
  const data = req.body;
  console.log(data);
  res.sendFile(path.join(rootDir, "views/success.html"));
});

module.exports = router;
