const express = require("express");
const path = require("path");
const rootDir = require("./utils/rootDir");
const userRouter = require("./routes/user");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(rootDir, "public")));

app.use(userRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views/404.html"));
});

app.listen(5000, () => {
  console.log("FoodRest server online at http://localhost:5000");
});
