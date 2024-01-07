import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      //you can mutate state thanks Immer library
      state.title = action.payload;

      //you can return new state as usually
      //return { ...state, title: action.payload };
    },
    resetFilter: (state) => {
      return initialState;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
  },
});

export const { setTitleFilter, resetFilter, setAuthorFilter } =
  filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export default filterSlice.reducer;
