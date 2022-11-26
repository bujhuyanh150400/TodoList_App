import { combineReducers } from "redux";
import FiltersReducer from "../Components/Filters/FiltersSlice";
import TodoListReducer from "../Components/TodoList/TodoSlice";

const rootReducer = combineReducers({
  filters: FiltersReducer,
  todoList: TodoListReducer,
});

export default rootReducer;
