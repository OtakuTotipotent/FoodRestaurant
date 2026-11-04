require("dotenv").config();
const path = require("path");
const express = require("express");

const connectDatabase = require("./utils/db");
const rootDir = require("./utils/rootDir");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");

const app = express();
const PORT = process.env.PORT || 3000;
connectDatabase();

app.use(express.json());
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));

app.use(userRouter);
app.use("/admin", adminRouter);

app.use((req, res) => {
  res.status(404).render("404", { page_title: "File Not Found" });
});

app.listen(PORT, () => {
  console.log(`FoodRest server online at http://localhost:${PORT}`);
});
