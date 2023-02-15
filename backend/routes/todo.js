const express = require ("express");
const Todo = require("./models/todo");
const router = express.Router()


//router
router.post("/add/todo", (req, res) => {
    const todo = new Todo ({
        todo: "testing"
    })
    todo.save()
    .then(result => {
        response.redirect("/")
    })
});

module.exports = router;