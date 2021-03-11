import React from "react";

function SearchBar() {
  return (
    <div className="container border">
      <div className="row my-3">
        <div className="col">
          <p className="text-start fw-bold">Book Search</p>
          <p>
            <input type="text" className="form-control" placeholder="Search for a book title"></input>
          </p>
          <button className="btn btn-primary float-end" type="submit">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
