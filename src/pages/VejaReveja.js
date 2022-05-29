import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, Text } from "react-native";
import axios from "axios";
import ListPlaylists from "../shared/components/ListPlaylists";
import { ScrollView } from "react-native-gesture-handler";
//import "react-youtube-playlist/dist/styles";

const originalData = [];

export default class VejaRevejaScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      loading: true,
    };
  }

  componentWillMount() {
    axios(
      "https://www.googleapis.com/youtube/v3/playlists?channelId=UCL-PySeCmy-XqSjm9bqTVmw&key=AIzaSyDyIYbHrNhPtih57me2DXnhW6bGtO3GVHQ&part=snippet&maxResults=50"
    )
      .then((result) => {
        originalData.push(...JSON.parse(JSON.stringify(result.data.items)));

        this.setState({
          data: result,
          original: result,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleInputChange = (inputName, inputValue) => {
    let newDataItems = [];

    if (inputValue !== undefined && inputValue !== "") {
      newDataItems = JSON.parse(
        JSON.stringify(
          this.state.data.data.items.filter((f) => {
            return f.snippet.title.includes(inputValue);
          })
        )
      );
    } else {
      newDataItems = originalData;
    }

    const newData = this.state.data;
    newData.data.items = newDataItems;

    this.setState({
      data: newData,
    });

    this.setState((state) => ({
      ...state,
      [inputName]: inputValue, // <-- Put square brackets
    }));
  };

  render() {
    return (
      <>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          onChangeText={(value) => this.handleInputChange("pesquisar", value)}
        />
        <ScrollView>
          <ListPlaylists playlists={this.state.data.data} props={this.props} />
        </ScrollView>
      </>
    );
  }
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
