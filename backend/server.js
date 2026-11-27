const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const { PORT } = require("./configs/index");
const connectDB = require("./utils/database");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const errorHandler = require("./middlewares/errorHandler");

// cors
const corsOptions = {
  credentials: true,
  origin: ["http://localhost:5173"],
}

// application
const app = express();
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use("/public", express.static("public"));


// routes
app.get("/", (req, res) => {
  res.send({ msg: "Welcome to FoodRest" });
});
app.use("/auth", authRouter);
app.use("/products", productRouter);

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
