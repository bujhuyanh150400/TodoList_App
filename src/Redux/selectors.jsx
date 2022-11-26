// import { createSelector } from "reselect"; // redux core

import { createSelector } from "@reduxjs/toolkit"; // redux core


//Todolist
const todoListSelector = (state) => state.todoList;
// Filters
// - Search
const searchTodoSelector = (state) => state.filters.search;
// - Status
const statusTodoSelector = (state) => state.filters.status;
// - priority
const priorityTodoSelector = (state) => state.filters.priority;

//reselect : nhận vào các selectors và tham số cuối là 1 callback, tham số của callback đó là dữ liệu của các selectors kia
export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTodoSelector,
  statusTodoSelector,
  priorityTodoSelector,
  (todoList, searchTodo, status, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length > 0
          ? todo.todo.includes(searchTodo) && priority.includes(todo.priority)
          : todo.todo.includes(searchTodo);
      }
      if (status === "Completed") {
        return priority.length > 0
          ? todo.completed === true && priority.includes(todo.priority)
          : todo.completed === true;
      }
      if (status === "Undone") {
        return priority.length > 0
          ? todo.completed === false && priority.includes(todo.priority)
          : todo.completed === false;
      }
    });
  }
);
