import React, { useState } from 'react';
import "../Styles/VideoPlayer.css";

const videos = [
  {
    id: 1,
    title: "Cartoon Video 1",
    thumbnail: "https://via.placeholder.com/150",
    url: "/videos/vid.mp4"
  },
  {
    id: 2,
    title: "Cartoon Video 2",
    thumbnail: "https://via.placeholder.com/150",
    url: "/videos/video2.mp4"
  },
  {
    id: 3,
    title: "Cartoon Video 3",
    thumbnail: "https://via.placeholder.com/150",
    url: "/videos/video3.mp4"
  },
  // Add more video objects here
];

function VideoPlayer() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="video-player-container">
      <div className="video-section">
        <video controls className="video-frame">
          <source src={selectedVideo.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2>{selectedVideo.title}</h2>
      </div>
      <div className="video-list-section">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`video-thumbnail ${video.id === selectedVideo.id ? 'active' : ''}`}
            onClick={() => setSelectedVideo(video)}
          >
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoPlayer;
