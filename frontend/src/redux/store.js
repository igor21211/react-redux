import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slice/filterSlice";
import bookSlice from "./slice/bookSlice";

const store = configureStore({
  reducer: {
    books: bookSlice,
    filter: filterReducer,
  },
});

export default store;
