import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import BookContainer from "../../components/BookContainer/BookContainer";

import "./Search.css";

function Search() {
  return (
    <div>
      <SearchBar />
      <BookContainer />
    </div>
  );
}

export default Search;
