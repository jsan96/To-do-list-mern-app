// DEPENDINCES
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//STRICT SET-UP
mongoose.set("strictQuery", false);
//mongoose.set("strictQuery", true);

//MIDDLEWARE
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors());



//MONGO SETUP
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB on:", process.env.MONGO_URI);
  }
);

//ROUTES
app.use(require("./routes/index"));

app.use(require("./routes/todo"));

//PORT
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});