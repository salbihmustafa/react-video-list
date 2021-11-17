import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";

class App extends React.Component {
  onSearchSubmit = async (searchTerm) => {
    //to check if calls are working, inspect -> network -> fetch/xhr -> clear
    //items[0].snippet
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm, //from youtube doc
      },
    });

    console.log(response.data.items);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmitHandler={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
