import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Linking, Divider } from "react-native";
import { Card } from "react-native-elements";
import windowSize from "../common/common";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHandshake,
  faAirFreshener,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";
//import mockPropagandas from "../common/mock-propagandas";

export default function Parceiros() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://localhost:44322/api/Propagandas");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  // console.log(data);

  // useEffect(() => {
  //   fetch("http://opiniaochat.com.br.hulk.hostazul.com.br/api/Propagandas")
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  const windowSize = windowSize;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleCard}>
          <FontAwesomeIcon icon={faHandshake} size={40} color={"#9296a9"} />
          <Text style={styles.textTitle}>NOSSOS PARCEIROS</Text>
        </View>

        {data.map((propaganda, i) => (
          <Card key={i} containerStyle={styles.cardBordered}>
            <Card.Title>{propaganda.nome}</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ width: "100%", height: 100 }}
              source={{
                uri: propaganda.imgBase64,
              }}
            />
            <Text
              onPress={() => {
                Linking.openURL(`${propaganda.urlDestino}`);
              }}
              style={styles.hyperlinkStyle}
            >
              Visitar {propaganda.nome}
            </Text>
          </Card>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
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

    alignItems: "center",
    jutifyContent: "center",
    flexDirection: "row",
  },
  textTitle: {
    fontWeight: "bold",
    color: "#9296a9",
    marginLeft: 10,
    fontSize: 18,
  },
  hyperlinkStyle: {
    color: "blue",
    marginTop: 15,
  },
  cardBordered: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginLeft: 10,
    marginRight: 10,
  },
});
