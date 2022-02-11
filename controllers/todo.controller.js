const Todo = require('../models/todo.model');

async const getAllTodos = (req, res, next) => {
    let todos;
    try {
        todos = await Todo.getAllTodos();
    } catch (error) {
        return next(error);
    }

    res.json({
        todos: todos,
    });
};

const addTodo = (req, res, next) => {};

const updateTodo = (req, res, next) => {};

const deleteTodo = (req, res, next) => {};

module.exports = {
    getAllTodos: getAllTodos,
    addTodo: addTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo
};