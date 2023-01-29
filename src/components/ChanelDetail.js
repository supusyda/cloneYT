import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/fetchAPIData";
import { Videos, ChannelCard } from "./";
const ChanelDetail = () => {
  let { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelVideo, setChannelVideo] = useState(null);

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) => {
      console.log("channel data", data.items[0]);
      setChannelDetails(data.items[0]);
    });
    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      console.log("Video data", data);
      setChannelVideo(data.items);
    });
  }, []);

  return (
    <div className="h-full bg-black">
      {console.log("channelDetails", channelDetails)}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[300px]"></div>
      <div className="flex justify-center ">
        {channelDetails != null && (
          <ChannelCard channel={channelDetails} marginTop="-93px"></ChannelCard>
        )}
      </div>
      {channelVideo != null && <Videos videos={channelVideo}></Videos>}
    </div>
  );
};

export default ChanelDetail;
