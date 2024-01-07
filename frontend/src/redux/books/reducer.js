import * as a from "./actionsTypes.js";
const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];
    case a.DELETE_BOOK:
      return state.filter((e) => e.id !== action.payload);
    case a.ADD_FAVORITE:
      return state.map((book) => {
        return book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : { ...book };
      });
    default:
      return state;
  }
};

export default booksReducer;
