import {
  resetFilter,
  selectTitleFilter,
  setTitleFilter,
} from "../../redux/slice/filterSlice";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
const Filter = () => {
  const dispatch = useDispatch();
  const titleState = useSelector(selectTitleFilter);

  const handleSearchTitle = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilter());
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
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
