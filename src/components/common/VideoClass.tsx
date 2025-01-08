"use client";

import React, { useEffect, useState } from "react";

const VideoClass = () => {
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    // Generate a unique room ID
    const id = Math.random().toString(36).substring(2, 10);
    setRoomId(id);
  }, []);

  return (
    <div>
      <h1>Welcome to the Video Class</h1>
      <p>Room ID: {roomId}</p>
      <iframe
        src={`https://meet.jit.si/${roomId}`}
        style={{ width: "100%", height: "500px", border: "none" }}
        allow="camera; microphone"
      ></iframe>
    </div>
  );
};

export default VideoClass;
