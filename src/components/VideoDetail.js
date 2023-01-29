import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchApi } from "../utils/fetchAPIData";
const VideoDetail = () => {
  let { id } = useParams();
  const [videos, setVideos] = useState(null);
  const [mainVideo, setMainVideo] = useState(null);
  useEffect(() => {
    fetchApi(`search?relatedToVideoId=${id}&part=snippet&type=video`).then(
      (data) => {
        console.log("related data", data);
        setVideos(data.items);
      }
    );
    fetchApi(`videos?part=snippet&id=${id}`).then((data) => {
      console.log("related VIDEO", data);
      setMainVideo(data.items[0]);
    });
  }, []);

  return (
    <div className="bg-black h-screen flex sm:flex-row flex-col">
      <div className="min-w-[80%] p-3">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          width="100%"
          height={"523px"}
          controls
        ></ReactPlayer>
      </div>
      <div className="overflow-y-scroll">
        {videos && <Videos videos={videos}></Videos>}
      </div>
    </div>
  );
};

export default VideoDetail;
