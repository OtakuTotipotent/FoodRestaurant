const express = require("express");

const app = express();
const PORT = 3000;

app.use("/", (req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.listen(PORT, () => console.log(`server online https://localhost:${PORT}`));
