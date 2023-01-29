import React from "react";
import { Box, CardMedia, CardContent, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
const ChannelCard = ({ channel, marginTop }) => {
  return (
    <div className="rounded-2xl w-[320px]">
      {console.log("channel from channel card", channel)}
      <Link to={`/chanel/${channel?.snippet.channelId}`}>
        <div className="flex flex-col justify-center text-white items-center h-full">
          {" "}
          <CardMedia
            image={channel?.snippet?.thumbnails?.high?.url}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              marginTop,
            }}
          ></CardMedia>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {channel.snippet.title.length > 60
              ? `${channel.snippet.title.slice(0, 60)} ...`
              : channel.snippet.title}
            <CheckCircle sx={{ fontSize: "12", ml: "5px" }}></CheckCircle>
          </Typography>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
