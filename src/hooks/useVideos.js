import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, []);

  const search = async (searchTerm) => {
    //to check if calls are working, inspect -> network -> fetch/xhr -> clear
    //items[0].snippet
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm, //from youtube doc
      },
    });

    setVideoList(response.data.items);
  };

  return { videoList, search }
};

export default useVideos;
