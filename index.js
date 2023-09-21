const express = require("express");
const app = express(); // Corrected this line
const cors = require("cors");

// const sequelize = require("./database");

app.use(express.urlencoded({ extended: false }));

const apiRouter = require("./routes/api");

app.use("/api", apiRouter);
app.use(cors());

app.use((req, res, next) => {
  return res.status(404).send(`<h1>404 page not found !!<h1/>`);
});

// using mongoose Schema
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/testNode", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected to MongoDB");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
