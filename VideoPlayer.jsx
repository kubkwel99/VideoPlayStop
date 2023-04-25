import React, { useRef, useEffect } from 'react';

function VideoPlayer(props) {
  const videoRef = useRef(null);

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
}

export default VideoPlayer;
