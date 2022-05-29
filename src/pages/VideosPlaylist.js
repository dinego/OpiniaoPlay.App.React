// https://www.googleapis.com/youtube/v3/playlistItems

import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, Text } from "react-native";
import axios from "axios";
import ListPlaylists from "../shared/components/ListPlaylists";
import { ScrollView } from "react-native-gesture-handler";
//import "react-youtube-playlist/dist/styles";

const originalData = [];

function VideosPlaylistScreen({ navigation }) {
  return (
    <>
      <ScrollView>teste</ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
