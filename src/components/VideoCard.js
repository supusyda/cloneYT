import React from "react";
import { Link } from "react-router-dom";
import { CardMedia, Card, CardContent, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
const VideoCard = ({ video }) => {
  return (
    // <div className="sm:max-w-[280px]   w-full  ">
    //   {console.log(video)}
    //   <Link
    //     to={video.id.videoId ? `${video.id.videoId}/video` : ""}
    //     className="max-h-10"
    //   >
    //     <img
    //       className="rounded-xl object-cover"
    //       src={video.snippet.thumbnails.high.url}
    //     ></img>
    //   </Link>
    //   <div className=" p-3  ">
    //     <div className="title flex flex-col ">
    //       <h2 className="text-xl font-semibold">{video.snippet.title}</h2>
    //       <span className="text-gray-400">channels</span>
    //     </div>
    //   </div>
    // </div>
    <Card sx={{ width: { md: "320px", xs: "320px" } }}>
      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : ""}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{ width: 358, height: 180, objectFit: "contain" }}
        ></CardMedia>
        <CardContent sx={{ height: "106px", backgroundColor: "#1e1e1e" }}>
          <Link to={video.id.videoId ? `/video/${video.id.videoID}` : `#`}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {video.snippet.title.length > 60
                ? `${video.snippet.title.slice(0, 60)} ...`
                : video.snippet.title}
            </Typography>
          </Link>
          <Link to={video.id.videoId ? `/video/${video.id.videoID}` : `#`}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {video.snippet.channelTitle.length > 60
                ? `${video.snippet.channelTitle.slice(0, 60)} ...`
                : video.snippet.channelTitle}
              <CheckCircle sx={{ fontSize: "12", ml: "5px" }}></CheckCircle>
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
