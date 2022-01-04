import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="ui small text loader">Loading...</div>;
  }
  return (
    <div>
      <div className="ui segment">
        <div className="ui embed">
          <iframe
            title="video player"
            src={"https://www.youtube.com/embed/" + video.id.videoId}
          />
        </div>

        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
