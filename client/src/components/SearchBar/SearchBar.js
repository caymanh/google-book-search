import React from "react";

function SearchBar() {
  return (
    <div className="container">
      <div className="row my-3">
      <div className="col-3"></div>
        <div className="col-6">
          <p>
            <input type="text" className="form-control justify-content" placeholder="Search for a book title"></input>
          </p>
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
