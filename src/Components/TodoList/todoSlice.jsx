// ===== Redux core ===== //

// const initState = [
//   // Todolist: dùng để làm về todo
//   { id: 1, todo: "exmaple", completed: false, priority: "Normal" },
//   { id: 2, todo: "todo2", completed: false, priority: "Hurry" },
//   { id: 3, todo: "blabla", completed: true, priority: "Hurry" },
//   { id: 4, todo: "something", completed: false, priority: "Now" },
// ];

// const TodoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/ADD_TODO":
//       return [...state, action.payload];
//     case "todoList/UPDATE_STATUS_TODO":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };
// export default TodoListReducer;

// ===== Redux toolkit ===== //
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "Todolist",
  initialState: [
    { id: 1, todo: "exmaple", completed: false, priority: "Normal" },
    { id: 2, todo: "todo2", completed: false, priority: "Hurry" },
    { id: 3, todo: "blabla", completed: true, priority: "Hurry" },
    { id: 4, todo: "something", completed: false, priority: "Now" },
  ],
  reducers: {
    ADD_TODO: (state, action) => {
      state.push(action.payload);
    },
    UPDATE_STATUS_TODO: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
    DELETE_TODO: (state, action) => {
      for (const todo of state) {
        if (todo.id === action.payload) {
          const index = state.indexOf(todo);
          state.splice(index, 1);
        }
      }
    },
  },
});
