import React, { useState } from "react";

const SearchBar = (props) => {
  // state = { searchTerm: "" };
  const [searchTerm, setSearchTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Make sure we call callback from parent component
    props.onFormSubmitHandler(searchTerm); //goes to parent App.js
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
