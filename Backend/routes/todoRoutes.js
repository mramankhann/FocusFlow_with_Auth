const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Todo = require("../models/Mytodo"); // ✅ Add this

const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");

// ✅ Stats API
router.get("/stats", auth, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user });
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const remaining = total - completed;
    res.json({ total, completed, remaining });
  } catch (err) {
    res.status(500).json({ msg: "Stats error", error: err.message });
  }
});

// ✅ Other CRUD routes
router.post("/", auth, createTodo);
router.get("/", auth, getTodos);
router.put("/:id", auth, updateTodo);
router.delete("/:id", auth, deleteTodo);

module.exports = router;
