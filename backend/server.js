const express = require("express");
const { PORT } = require("./configs/index");
const connectDB = require("./utils/database");
const userRouter = require("./routes/user");

// application
const app = express();

// database
connectDB();

// routes
app.get("/", (req, res) => {
  res.send({ msg: "Welcome to FoodRest" });
});

app.use("/user", userRouter);

// server
app.listen(PORT, () => {
  console.log(`FoodRest server online at http://localhost:${PORT}`);
});
