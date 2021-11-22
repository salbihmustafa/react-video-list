import "./App.css";
import React from "react";
import youtube from "./apis/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {
  state = { videoList: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit('ReactJS');
  }

  onSearchSubmit = async (searchTerm) => {
    //to check if calls are working, inspect -> network -> fetch/xhr -> clear
    //items[0].snippet
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm, //from youtube doc
      },
    });

    this.setState({
      videoList: response.data.items,
      selectedVideo: response.data.items[0] //defaulting the first search term video to display.
    });
  };

  onVideoSelect = (video) => {
    //callback
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmitHandler={this.onSearchSubmit} />
        <div className="ui grid sub-container">
          <div className="ui row video-list">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videoList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
