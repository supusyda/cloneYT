import React from "react";
import { VideoCard, ChannelCard } from "./";
const Videos = ({ videos }) => {
  return (
    <div className="flex text-white flex-wrap gap-2 overflow-scroll justify-center">
      {videos.length > 0 &&
        videos.map((item) => {
          if (item.id.videoId) {
            return <VideoCard key={item.id.videoId} video={item}></VideoCard>;
          }
          if (item.id.channelId) {
            return <ChannelCard  channel={item}></ChannelCard>;
          }
        })}
    </div>
  );
};

export default Videos;
