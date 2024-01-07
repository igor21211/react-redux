import { useState } from "react";
import "./BookForm.css";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../../redux/books/actionsCreators";
import booksData from "../../data/books.json";
const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispath = useDispatch();

  const handleOnRandomBook = () => {
    const random = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[random];
    const result = {
      ...randomBook,
      isFavorite: false,
      id: uuidv4(),
    };
    dispath(addBook(result));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = {
        title,
        author,
        isFavorite: false,
        id: uuidv4(),
      };
      dispath(addBook(book));
      setTitle("");
      setAuthor("");
    }
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
      </form>
    </div>
  );
};

export default BookForm;
