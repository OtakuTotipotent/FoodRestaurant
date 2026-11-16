const express = require("express");

const { PORT } = require("./configs/index");
const connectDB = require("./utils/database");
const userRouter = require("./routes/user");
const errorHandler = require("./middlewares/errorHandler");

// application
const app = express();
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send({ msg: "Welcome to FoodRest" });
});

app.use("/user", userRouter);

// database
connectDB();

// middlewares
app.use(errorHandler);

// server
app.listen(PORT, () => {
  console.log(`FoodRest server online at http://localhost:${PORT}`);
});
