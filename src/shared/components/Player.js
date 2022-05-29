import React from 'react';
import {StyleSheet} from 'react-native';
import VideoPlayer from 'expo-video-player'
import { Video } from 'expo-av'

export default function Player() {
  return(
      <VideoPlayer
      videoProps={{
        shouldPlay: true,
        resizeMode: Video.RESIZE_MODE_STRETCH,
        source: {
          uri: 'https://livefocamundo.com:8081/opiniaoplay/index.m3u8',
        },
      }}
      style={styles.videoStyle}
    />
  );
}

const styles = StyleSheet.create({
  videoStyle: {
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    height: 222
  },
});
