import React, { useContext, useEffect, useState } from "react";
import ChannelContext from "../context/useChannelContext";
import { useParams } from "react-router-dom";
import Hls from "hls.js";
import CustomVideo from "../components/customVideo/CustomVideo";
const M3uPlayer = () => {
  const params = useParams();
  const { id } = params;

  const { m3uData } = useContext(ChannelContext);

  const filteredM3uList = m3uData?.filter((index) => index.id == id);

  useEffect(() => {
    const videoData = m3uData?.find((item) => item.id == id);

    if (videoData) {
      const { title } = videoData;
      var video = document.getElementById("video");

      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(title.file);
        hls.attachMedia(video);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = title.file;
      }
    }
  }, [filteredM3uList]);

  return (
    <div style={{ overflowX: "hidden" }}>
      
      {filteredM3uList?.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <h3 style={{ color: "white", textAlign: "end", width: "78%" }}>
            {item.tvname}
          </h3>
          <div style={{ margin: "0 auto " }}>
            {/* <Player   qualityLevels={false}  hlsQualitySelector={false}  src={item.title.file} /> */}
            <CustomVideo
              id="video"
                 
            ></CustomVideo>
          </div>
        </div>
      ))}
      {filteredM3uList?.length === 0 ? (
        <span
          style={{
            width: "100%",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color:'white',
          }}
        >
         {(" Please select a channel from the playlist").toUpperCase()}
        </span>
      ) : null}
    </div>
  );
};

export default M3uPlayer;
