import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import createBookWithID from "../../utils/createBookWithId";
import { setErrorMsg } from "./errorSlice";
const initialState = {
  books: [],
  isLoadingByApi: false,
};

export const fetchBook = createAsyncThunk(
  "/books/fetchBook",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setErrorMsg(error.message));
      throw thunkAPI.rejectWithValue(error);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    },
    addFavorite: (state, action) => {
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoadingByApi = true;
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoadingByApi = false;
      if (action?.payload?.title && action?.payload?.author) {
        state.books.push(createBookWithID(action.payload, "API"));
      }
    });
    builder.addCase(fetchBook.rejected, (state) => {
      state.isLoadingByApi = false;
    });
  },
});

export const { addBook, deleteBook, addFavorite } = booksSlice.actions;
export const stateBooks = (state) => state.books.books;
export const stateIsLoading = (state) => state.books.isLoadingByApi;
export default booksSlice.reducer;
