const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParse = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(cookieParse());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: ".env",
  });
}

// import routes
const user = require("./controllers/user");
app.use("/api/v1/user", user);

// for ErrorHandling
app.use(ErrorHandler);

module.exports = app;
