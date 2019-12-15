const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

// Set up app using express
const app = express();
app.use(logger("dev")); // log request to the console
app.use(bodyParser.json()); // parse incoming requests data to JSON
app.use(bodyParser.urlencoded({ extended: false }));

// import all routes from '/routes' to app.js
const routes = require("./server/routes");
routes(app);

// Catch-all unavaible routes
app.get("*", (req, res) => {
  return res.status(200).send({
    message: "Welcome to the beginning of nothingness",
  });
});

module.exports = app;
