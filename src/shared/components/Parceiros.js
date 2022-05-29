import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem, Card } from "react-native-elements";
import windowSize from "../common/common";

export default function Parceiros() {
  const list = [
    {
      name: "Sucesso AZ",
      avatar_url:
        "https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg",
      subtitle: "Apenas descrição",
    },
    {
      name: "Teste de Parceiro",
      avatar_url:
        "https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg",
      subtitle: "Apenas teste de descrição",
    },
  ];

  const windowSize = windowSize;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleCard}>Nossos Parceiros</Text>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar size={64} rounded source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    padding: 15,
    width: windowSize,
  },
  cardTitle: {
    alignSelf: "flex-start",
  },
  titleCard: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
});
