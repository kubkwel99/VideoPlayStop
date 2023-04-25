/** @format */

import React, { useRef, useEffect } from 'react';

function VideoPlayer(props) {
  const videoRef = useRef(null);

  const videos = [
    { id: 1, title: 'Video 1', url: 'src/videos/0001.mp4', text: 'text' },
    { id: 2, title: 'Video 2', url: 'src/videos/0002.mp4', text: 'text' },
    { id: 3, title: 'Video 3', url: 'src/videos/0003.mp4', text: 'text' },
  ];

  useEffect(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      video.addEventListener('play', () => {
        videos.forEach((otherVideo) => {
          if (otherVideo !== video) {
            otherVideo.pause();
          }
        });
      });
    });
  }, []);

  return (
    <div>
      <div>
        {videos.map((video) => (
          <div>
            <video
              title={video.title}
              width='320'
              height='auto'
              src={video.url}
              controls
              ref={videoRef}
              text={video.text}
            />
            <h1>{video.title}</h1>
            <p>{video.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoPlayer;
