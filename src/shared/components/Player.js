import React from "react";
import ReactHlsPlayer from "react-hls-player";

export default function Player() {
  return (
    <ReactHlsPlayer
      src="https://livefocamundo.com:8081/opiniaoplay/index.m3u8"
      autoPlay={true}
      controls={true}
      width="100%"
      height="auto"
    />
  );
}
