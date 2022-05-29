import { View, Text, StyleSheet } from "react-native";
import { Chip, Icon } from "react-native-elements";

export default function Player() {
  return (
    <View style={styles.container}>
      <View style={styles.textTitle}>
        <Icon
          color={"#ffffff"}
          style={styles.icon}
          type="font-awesome"
          name="play-circle"
        />
        <Text style={styles.text}>VEJA E REVEJA</Text>
      </View>

      <Text
        style={{
          marginBottom: 10,
          color: "#ffffff",
          fontSize: 16,
          textShadowColor: "rgba(0, 0, 0, 0.75)",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10,
        }}
      >
        Aqui você pode ver e rever todos os nossos programas já apresentados.
      </Text>

      <Chip
        style={styles.buttonRever}
        title="Veja agora mesmo"
        icon={{
          name: "play-circle",
          type: "font-awesome",
          size: 20,
          color: "white",
        }}
        iconRight
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#9296a9",
    borderRadius: 14,
    padding: 10,
  },
  textTitle: {
    flexDirection: "row",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  icon: { marginRight: 10 },
  buttonRever: {
    backgroundColor: "#373b4c",
    color: "#373b4c",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
  },
});
