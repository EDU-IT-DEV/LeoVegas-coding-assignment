import React from 'react';
import { Link } from "react-router-dom";

const SearchInput = ({ onSearch }) => {
  return (
    <div className="input-group rounded">
      <Link to="/" onClick={() => onSearch('')} className="search-link">
        <input type="search"
          data-testid="search-movies"
          onKeyUp={(e) => onSearch(e.target.value)}
          className="form-control rounded"
          placeholder="Search movies..."
          aria-label="Search movies"
          aria-describedby="search-addon"
        />
      </Link>
    </div>
  );
};

export default SearchInput;