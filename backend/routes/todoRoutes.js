const express = require('express');
const list  = express.Router();
const {todos,newTodo,deleteTodo,completeTodo} = require('../controllers/todoController');

//TODO ROUTES
list.get('/todos',todos)

list.post('/todo/new',newTodo)

list.delete('/todo/delete/:id',deleteTodo)

list.put('/todo/complete/:id', completeTodo)



module.exports = list;