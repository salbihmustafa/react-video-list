import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onSearchInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Make sure we call callback from parent component
    this.props.onFormSubmitHandler(this.state.searchTerm); //goes to parent App.js
    this.setState({ searchTerm: "" }); //reset the search bar
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onSearchInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
