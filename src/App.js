import React from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import youtube from "./apis/youtube";

class App extends React.Component {
  state = { videoList: [] };

  onSearchSubmit = async (searchTerm) => {
    //to check if calls are working, inspect -> network -> fetch/xhr -> clear
    //items[0].snippet
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm, //from youtube doc
      },
    });

    this.setState({ videoList: response.data.items});
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmitHandler={this.onSearchSubmit} />
        <VideoList videos={this.state.videoList} />
      </div>
    );
  }
}

export default App;
