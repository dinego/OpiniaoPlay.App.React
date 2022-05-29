import { View, Text, StyleSheet } from "react-native";
import { Divider, Image } from "react-native-elements";
import Moment from "moment";

function ListPlaylists({ playlists, props }) {
  console.log(props);
  if (!playlists) {
    return <Text>NENHUMA PLAYLIST</Text>;
  }

  Moment.locale("pt-BR");

  return (
    <>
      <View style={styles.container}>
        {playlists.items.map((m, index) => {
          return (
            <View key={index} style={styles.video}>
              <Image
                source={{ uri: m.snippet.thumbnails.standard.url }}
                style={{ width: "100%", height: 230 }}
                onPress={() =>
                  props.navigation.navigate("VideosPlaylistScreen")
                }
              ></Image>
              <View style={styles.descriptionVideo}>
                <Text style={styles.titleVideo}>{m.snippet.title}</Text>

                <Text>
                  Data de Publicação:{" "}
                  {Moment(m.snippet.publishedAt).format("DD/MM/yyyy")}
                </Text>
              </View>
              <Divider></Divider>
            </View>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  video: {
    marginBottom: 10,
  },
  titleVideo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  descriptionVideo: {
    marginBottom: 10,
  },
});

export default ListPlaylists;
