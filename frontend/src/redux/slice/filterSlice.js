import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
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
  },
});

export const { setTitleFilter, resetFilter } = filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;
export default filterSlice.reducer;
