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

// middlewares
app.use(errorHandler);

// server startup along with database
const startServer = async () => {
  try {
    // database
    await connectDB();

    // server
    app.listen(PORT, () => {
      console.log(`FoodRest server online at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
};

startServer();
