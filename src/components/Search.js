import React, {useState} from "react";

function Search({onSearch}) {
  const [searchText, setSearchText] = useState();

  function handleSearch(event) {
    onSearch(event.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchText}
        onChange={handleSearch}
        placeholder="Type a name to search..."
      />
    </div>
  );
}

export default Search;
