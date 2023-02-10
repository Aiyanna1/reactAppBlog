import "./Searchbar.css";
import React, { useState } from "react";

const useSearch = (blog) => {
  const [searchInput, setSearchInput] = useState("");

  let filteredBlog = [];
  if (searchInput.length > 0) {
    filteredBlog = blog.filter((title) => {
      return title.word.includes(searchInput);
    });
  }

  return [filteredBlog, searchInput, setSearchInput];
};

const Searchbar = () => {
  const [filteredBlog, searchInput, setSearchInput] = useSearch([
    { word: "Pink is Beautiful" },
    { word: "Sailor Moon" },
    { word: "Sakura Blossoms" },
  ]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <input className="search"
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      {filteredBlog.map((word, index) => {
        return word.word;
      })}
    </div>
  );
};

export default Searchbar;

