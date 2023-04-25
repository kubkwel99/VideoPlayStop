import React, { useEffect, useRef } from 'react';

function VideoPlayer(props) {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;

    // Pause the previous video when a new one starts playing
    const handlePlay = () => {
      const videos = document.getElementsByTagName('video');
      for (let i = 0; i < videos.length; i++) {
        if (videos[i] !== video) {
          videos[i].pause();
        }
      }
    };
    video.addEventListener('play', handlePlay);

    return () => {
      video.removeEventListener('play', handlePlay);
    };
  }, []);

  return (
    <div>
          <video ref={videoRef} src={"src/videos/0001.mp4"} controls></video>
    <video ref={videoRef} src={"src/videos/0001.mp4"} controls></video>
    </div>

  );
}

export default VideoPlayer;
