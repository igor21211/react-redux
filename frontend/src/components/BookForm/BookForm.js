import { useState } from "react";
import "./BookForm.css";
import { useDispatch } from "react-redux";
import booksData from "../../data/books.json";
import createBookWithID from "../../utils/createBookWithId";
import { addBook, fetchBook } from "../../redux/slice/bookSlice";
import { setErrorMsg } from "../../redux/slice/errorSlice";
const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleOnRandomBook = () => {
    const random = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[random];

    dispatch(addBook(createBookWithID(randomBook, "random")));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author }, "manual")));
      setTitle("");
      setAuthor("");
    } else {
      dispatch(setErrorMsg("You must fill title and author!"));
    }
  };

  const handleOnRandomBookAPI = () => {
    dispatch(fetchBook("http://localhost:4000/random-book"));
  };
  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleOnRandomBook}>
          Add Random
        </button>
        <button type="button" onClick={handleOnRandomBookAPI}>
          Add Random by API
        </button>
      </form>
    </div>
  );
};

export default BookForm;
