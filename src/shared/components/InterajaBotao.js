import { View } from "react-native";
import { Chip } from "react-native-elements";

export default function InterajaBotao() {
  return (
    <View
      style={{
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        marginRight: 5,
        marginTop: 5,
      }}
    >
      <Chip
        onPress={() => navigation.navigate("Chat")}
        title="Interaja Conosco"
        icon={{
          name: "comments-o",
          type: "font-awesome",
          size: 20,
          color: "white",
        }}
        iconRight
      />
    </View>
  );
}
