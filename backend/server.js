const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to FoodRest" });
});

app.listen(3000, () => {
  console.log(`FoodRest server online at http://localhost:${3000}`);
});
