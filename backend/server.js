// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const todoRoute = require('./routes/todoRoutes')
const userRoutes = require('./routes/userRoutes')

//STRICT SET-UP
mongoose.set("strictQuery", false);
//mongoose.set("strictQuery", true);

//MIDDLEWARE
require("dotenv").config();
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

//HOME ROUTE
app.get('/', (req, res) => {
  res.status (200).json ({message: 'Welcome to Life List!'})
}); 

//IMPORT TODOS
app.use(todoRoute);

//IMPORT CREATE USER
app.use(userRoutes);

//PORT
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});