import Header from "./components/Header";
import VideoCard from "./components/VideoCard";
import data from "./data.json";
import { useEffect, useState } from "react";
import "./components/style.css";
import axios from "axios";
import Searchbar from "./components/Searchbar";

function App() {
  const [video, setVideo] = useState(null);
  const [search, SetSearch] = useState("Sample Videos");
  const getVideos = async () => {
    axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "50",
        key: process.env.REACT_APP_API_KEY,
        q: search,
      },
    })
      .then((res) => {
        setVideo(res.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getVideos();
  }, [search]);
  return (
    <div>
      <Searchbar setSearch={SetSearch} setVideo={setVideo}></Searchbar>
      <div className="box">
        {video ? (
          video.map((item, index) => {
            return (
              <VideoCard
                key={index}
                thumbnailUrl={item.snippet.thumbnails.medium.url}
                title={item.snippet.title}
                author={item.snippet.channelTitle}
              ></VideoCard>
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}

export default App;
