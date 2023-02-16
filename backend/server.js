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
const Todo = require("./models/Todo");

app.get('/', (req, res) => {
  res.send('Welcome to Life List!')
}); 

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
});

app.post('/todo/new', (req, res) => {
	const todo = new Todo({
		text: req.body.text
	})

	todo.save();

	res.json(todo);
});

//PORT
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});