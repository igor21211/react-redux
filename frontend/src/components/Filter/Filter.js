import {
  resetFilter,
  selectAuthorFilter,
  selectTitleFilter,
  setAuthorFilter,
  setTitleFilter,
} from "../../redux/slice/filterSlice";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
const Filter = () => {
  const dispatch = useDispatch();
  const titleState = useSelector(selectTitleFilter);
  const authorState = useSelector(selectAuthorFilter);

  const handleSearchTitle = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilter());
  };
  const handleSearchAuthor = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={titleState}
            onChange={handleSearchTitle}
            type="text"
            placeholder="Filter by title..."
          />
        </div>
        <div className="filter-group">
          <input
            value={authorState}
            onChange={handleSearchAuthor}
            type="text"
            placeholder="Filter by author..."
          />
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
