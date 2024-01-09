import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slice/filterSlice";
import bookSlice from "./slice/bookSlice";
import errorSlice from "./slice/errorSlice";

const store = configureStore({
  reducer: {
    books: bookSlice,
    filter: filterReducer,
    error: errorSlice,
  },
});

export default store;
