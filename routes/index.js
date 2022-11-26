const router = require("express").Router()
const Todo = require("../models/Todo");

// routes will be here....
router.get("/index3", async(req, res) => {
    const allTodo = await Todo.find();
    res.render("index3", {todo: allTodo})
})


module.exports = router;