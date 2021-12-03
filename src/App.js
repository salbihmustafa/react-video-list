import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import useVideos from "./hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videoList, search } = useVideos('ReactJS'); //like VueJS (composables)

  useEffect(() => {
    setSelectedVideo(videoList[0]); //defaulting the first search term video to display.
  }, [videoList]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmitHandler={search} />
      <div className="ui grid sub-container">
        <div className="eleven wide column">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="five wide column">
          <VideoList onVideoSelect={setSelectedVideo} videos={videoList} />
        </div>
      </div>
    </div>
  );
};

export default App;
