import React from "react";
import { View, Text } from "react-native";

const Divider = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 2,
        marginVertical: 20,
        marginHorizontal: 10,
      }}
    >
      <View style={{ backgroundColor: "#9296a9", flex: 0.3 }} />
      <View style={{ backgroundColor: "#3e404a", flex: 0.7 }} />
    </View>
  );
};

export default Divider;
