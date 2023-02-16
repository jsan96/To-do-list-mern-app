const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;