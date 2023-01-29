import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import SideBar from "./SideBar";
import { fetchApi } from "../utils/fetchAPIData";
const Feed = () => {
  let [videos, setVideos] = useState([]);
  const [selected, SetSelected] = useState("New");

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selected}`).then((data) => {
      setVideos(data.items);
    });
  }, [selected]);

  return (
    <Stack sx={{ flexDirection: { md: "row" } }}>
      {console.log(videos)}
      <div className="flex   flex-col md:px-8 px-0 border-r-2 sm:h-screen h-auto sideBar bg-black ">
        <SideBar selected={selected} SetSelected={SetSelected}></SideBar>
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#FFF" }}
        >
          Copyright
        </Typography>
      </div>
      <div className="flex  flex-col h-screen bg-black w-full px-3">
        <Typography>
          <span className={`text-white text-3xl font-semibold`}>
            {selected}{" "}
          </span>{" "}
          <span className={`text-red-700 text-3xl font-semibold`}>Videos</span>
        </Typography>
        <Videos videos={videos}></Videos>
      </div>
    </Stack>
  );
};

export default Feed;
