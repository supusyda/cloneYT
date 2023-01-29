import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import SideBar from "./SideBar";
import { fetchApi } from "../utils/fetchAPIData";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  let [videos, setVideos] = useState([]);
  let { searchTerm } = useParams();
  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Stack sx={{ flexDirection: { md: "row" } }}>
      {console.log(searchTerm)}

      <div className="flex  flex-col h-screen bg-black w-full px-3">
        <Typography>
          <span className={`text-white text-3xl font-semibold`}>
            {searchTerm}
          </span>
          <span className={`text-red-700 text-3xl font-semibold`}>
            {" "}
            Videos{" "}
          </span>
        </Typography>
        <Videos videos={videos}></Videos>
      </div>
    </Stack>
  );
};

export default SearchFeed;
