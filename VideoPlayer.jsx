/** @format */

import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ src, autoPlay }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handlePlay = (event) => {
      const allVideos = document.querySelectorAll('video');
      allVideos.forEach((v) => {
        if (v !== event.target) {
          v.pause();
        }
      });
    };

    videoRef.current.addEventListener('play', handlePlay);

    return () => {
      videoRef.current.removeEventListener('play', handlePlay);
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        src={'src/videos/0001.mp4'}
        style={{ height: '400px' }}
        controls
      />
      <video
        ref={videoRef}
        src={'src/videos/0003.mp4'}
        style={{ height: '400px' }}
        controls
      />
      <video
        ref={videoRef}
        src={'src/videos/0007.mp4'}
        style={{ height: '400px' }}
        controls
      />
    </div>
  );
};

export default VideoPlayer;
