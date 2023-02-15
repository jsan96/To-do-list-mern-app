// DEPENDINCES
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//
mongoose.set("strictQuery", false);
//mongoose.set("strictQuery", true);

//MIDDLEWARE
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo on: ", process.env.MONGO_URI);
  }
);

//PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
