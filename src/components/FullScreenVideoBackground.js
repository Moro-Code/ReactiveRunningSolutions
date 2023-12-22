import React from "react";

export const FullScreenVideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10">
      <video
        className="w-full h-screen object-cover"
        autoPlay
        loop
        muted
        style={{ zIndex: -1 }}
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
      {/* Mesh Screen Effect Overlay */}
      <div className="mesh-screen-effect"></div>
    </div>
  );
};
