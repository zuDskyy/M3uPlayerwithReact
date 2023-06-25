import React, { useEffect, useRef, useState } from "react";
import "./videoPlayer.css"; // Import the CSS file for styling

const CustomVideo = ({ ...props }) => {
  const ASSETS = process.env.REACT_APP_M3U_ASSETS;
  const videoRef = useRef(null);
  const [playpause, setPlayPause] = useState(false);
  


  const togglePlayPause = () => {
    const video = videoRef.current;
    setPlayPause((prev) => !prev);
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleKeyDown = (event) => {
    if (event.code === "Space") {
      togglePlayPause();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  const toggleFullScreen = () => {
    const video = videoRef.current;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };
  const turnOnLiveMode = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration; // Set the current time to the end of the video
      videoRef.current.play(); // Start playing the video from the latest available time
    }
  };

  const changeVolume = (value) => {
    const video = videoRef.current;
    video.volume = value;
  };

  return (
    <div className="video-container">
      <video ref={videoRef} {...props} className="video-player" onClick={togglePlayPause} />

      <div className="controls">
        <div className="control-button" onClick={togglePlayPause}>
       { playpause &&  <img
            width={40}
            height={40}
            src={ASSETS + "/pause.png"}
            alt=""
          />}
        {!playpause && <img
            width={40}
            height={40}
            src={   ASSETS + "/play.png" }
            alt=""
          />}
        </div> 
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          defaultValue="1"
          onChange={(e) => changeVolume(e.target.value)}
        />
        <div onClick={turnOnLiveMode} style={{display:'flex',alignItems:'center'}} className="control-button"><img
            width={40}
            height={40}
            src={ASSETS + "/livestream.png"}
            alt=""
          />Live</div>
        <div className="control-button" onClick={toggleFullScreen}>
        <img
            width={40}
            height={40}
            src={ASSETS + "/fullscreen.png"}
            alt=""
          />
        </div>
       
      </div>
    </div>
  );
};

export default CustomVideo;
