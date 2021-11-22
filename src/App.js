import React from "react";
import youtube from "./apis/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {
  state = { videoList: [], selectedVideo: null };

  onSearchSubmit = async (searchTerm) => {
    //to check if calls are working, inspect -> network -> fetch/xhr -> clear
    //items[0].snippet
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm, //from youtube doc
      },
    });

    this.setState({ videoList: response.data.items });
  };

  onVideoSelect = (video) => {
    //callback
    this.setState({selectedVideo: video});
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmitHandler={this.onSearchSubmit} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videoList}
        />
      </div>
    );
  }
}

export default App;
