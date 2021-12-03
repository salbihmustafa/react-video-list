import "./App.css";
import React, { useState, useEffect } from "react";
import youtube from "./apis/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const App = () => {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearchSubmit("ReactJS");
  }, []);

  const onSearchSubmit = async (searchTerm) => {
    //to check if calls are working, inspect -> network -> fetch/xhr -> clear
    //items[0].snippet
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm, //from youtube doc
      },
    });

    setVideoList(response.data.items);
    setSelectedVideo(response.data.items[0]); //defaulting the first search term video to display.
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmitHandler={onSearchSubmit} />
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
