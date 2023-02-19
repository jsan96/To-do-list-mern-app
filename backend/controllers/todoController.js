//TODOs

const Todo = require("../models/Todo");


const todos = async (req, res) => {
    const todos = await Todo.find();
  
    res.json(todos);
  }

const newTodo = (req, res) => {
	const todo = new Todo({
		text: req.body.text
	})

	todo.save();

	res.json(todo);
}

const deleteTodo = async (req, res) => {
	const result = await Todo.findByIdAndDelete(req.params.id);

	res.json({result});
}

const completeTodo = async (req, res)  => {
	const todo = await Todo.findById(req.params.id);
  
	todo.complete = !todo.complete
  
	todo.save();
  
	res.json(todo);
  }




module.exports = {todos,newTodo,deleteTodo,completeTodo}