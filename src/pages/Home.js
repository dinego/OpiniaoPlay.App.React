import React from "react";
import { StyleSheet, View } from "react-native";
import Player from "../shared/components/Player";
import Parceiros from "../shared/components/Parceiros";
import InterajaBotao from "../shared/components/InterajaBotao";
import VejaReveja from "../shared/components/VejaReveja";
import Divider from "../shared/components/Divider";

const list = [
  {
    name: "Sucesso AZ",
    avatar_url: "http://localhost:19002/assets/sucesso.jpg",
    subtitle: "Apenas descrição",
  },
  {
    name: "Teste de Parceiro",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Apenas teste de descrição",
  },
];

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Welcome /> */}
        <Player />

        <InterajaBotao />

        <VejaReveja />
        <Divider />
        <Parceiros />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
