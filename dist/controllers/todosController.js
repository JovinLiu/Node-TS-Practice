"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
// import { Request, Response, NextFunction } from "express";
// export const createTodo = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Created the todo.", createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const { id } = req.params;
    const text = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === id);
    if (todoIndex < 0) {
        throw new Error("cannot find todo!");
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, text);
    res.json({ message: "updated!", updateTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const { id } = req.params;
    const text = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === id);
    if (todoIndex < 0) {
        throw new Error("cannot find todo!");
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "Deleted!" });
};
exports.deleteTodo = deleteTodo;
