"use client";

import { useState } from "react";

import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const handleSearch = () => {};

  const [manufacturer, setManufacturer] = useState("");

  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <div className="searchBar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
