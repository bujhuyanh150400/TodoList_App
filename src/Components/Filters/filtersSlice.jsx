// ===== Redux core ===== //
// const initState = {
//   //chức năng Filters: dùng để lọc
//   search: "",
//   status: "All",
//   priority: [],
// };

// const FiltersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/SEARCH_TODO":
//       return {
//         ...state,
//         search: action.payload,
//       };
//       case "filters/STATUS_TODO":
//       return {
//         ...state,
//         status: action.payload,
//       };
//       case "filters/PRIORITY_TODO":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export default FiltersReducer;

// ===== Redux toolkit ===== //
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    // Tat ca la inmutaion
    SEARCH_TODO: (state, action) => {
      state.search = action.payload;
    },
    STATUS_TODO: (state, action) => {
      state.status = action.payload;
    },
    PRIORITY_TODO: (state, action) => {
      state.priority = action.payload;
    },
  },
});
