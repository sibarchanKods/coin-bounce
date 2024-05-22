const dotenv = require("dotenv").config();
const express = require("express");
const dbConnect = require("./database/index");
const { PORT } = require("./config/index");
const router = require("./routes/index");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.use(express.json());

app.use(router);

dbConnect();

app.use("/storage", express.static("storage"));//for access the image in browser

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Backend is running on port:${PORT}`);
});
