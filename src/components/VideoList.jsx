import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="ui relaxed divided list">
      {videos.map((v) => (
        <VideoItem onVideoSelect={onVideoSelect} key={v.id.videoId} video={v} />
      ))}
    </div>
  );
};

export default VideoList;
