import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import createBookWithID from "../../utils/createBookWithId";

const initialState = [];

export const fetchBook = createAsyncThunk("/books/fetchBook", async () => {
  const res = await axios.get("http://localhost:4000/random-book");
  return res.data;
});

const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    addFavorite: (state, action) => {
      return state.map((book) => {
        return book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : { ...book };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithID(action.payload, "API"));
      }
    });
    builder.addCase(fetchBook.rejected, (state, action) => {});
  },
});

export const { addBook, deleteBook, addFavorite } = booksSlice.actions;
export const stateBooks = (state) => state.books;
export default booksSlice.reducer;
