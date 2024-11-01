import { RequestHandler } from "express";
import { Todo } from "../models/todo";
import { create } from "domain";
// import { Request, Response, NextFunction } from "express";
// export const createTodo = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: "Created the todo.", createTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params;
  const text = (req.body as { text: string }).text;
  const todoIndex = TODOS.findIndex((todo) => todo.id === id);

  if (todoIndex < 0) {
    throw new Error("cannot find todo!");
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, text);

  res.json({ message: "updated!", updateTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params;
  const text = (req.body as { text: string }).text;
  const todoIndex = TODOS.findIndex((todo) => todo.id === id);

  if (todoIndex < 0) {
    throw new Error("cannot find todo!");
  }

  TODOS.splice(todoIndex, 1);

  res.json({ message: "Deleted!" });
};
