import { useDispatch, useSelector } from "react-redux";
import "./BookList.css";
import { deleteBook, addFavorite } from "../../redux/books/actionsCreators";
import { BsBookmarkStar } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";
import {
  selectAuthorFilter,
  selectTitleFilter,
} from "../../redux/slice/filterSlice";
const BookList = () => {
  const books = useSelector((state) => state.books);
  const filterTitle = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);

  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  const toggleFavorite = (id) => {
    dispatch(addFavorite(id));
  };

  const filtersBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());
    const matchesBooks = matchesTitle && matchesAuthor;
    return matchesBooks;
  });
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No Books Available</p>
      ) : (
        <ul>
          {filtersBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                {book.isFavorite ? (
                  <BsBookmarkStarFill
                    onClick={() => toggleFavorite(book.id)}
                    className="star-icon"
                  />
                ) : (
                  <BsBookmarkStar
                    onClick={() => toggleFavorite(book.id)}
                    className="star-icon"
                  />
                )}
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
