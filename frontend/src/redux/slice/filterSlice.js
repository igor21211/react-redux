import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
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
    resetFilter: () => {
      return initialState;
    },
    setOnlyFAvoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
  },
});

export const {
  setTitleFilter,
  resetFilter,
  setAuthorFilter,
  setOnlyFAvoriteFilter,
} = filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilterFilter = (state) =>
  state.filter.onlyFavorite;
export default filterSlice.reducer;
