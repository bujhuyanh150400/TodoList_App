// ===== Redux core ===== //

// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// // createStore nhận 3 tham số:
// // + rootReducer: function cập nhật state
// // + initValue: nếu muốn set giá trị mặc định
// // + enhancers: cấu hình các middleware
// const enhancers = composeWithDevTools();
// const store = createStore(rootReducer, enhancers);
// export default store;

// ===== Redux toolkit ===== //
import { configureStore } from "@reduxjs/toolkit";
import FiltersSlice from "../Components/Filters/filtersSlice";
import TodoListSlice from "../Components/TodoList/todoSlice";
// Redux toolkit sẽ hỗ trợ combine reducer
const store = configureStore({
  reducer: {
    filters: FiltersSlice.reducer,
    todoList: TodoListSlice.reducer,
  },
});
export default store;
