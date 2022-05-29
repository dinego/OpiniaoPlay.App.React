import React from "react";
import { SafeAreaView, Text, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <>
        <SafeAreaView>
          <Text>BLA BLA BLA</Text>
          <Image
            source={{ uri: "../../assets/bg-veja-reveja.jpg" }}
            style={{ width: 200, height: 200 }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Text>BLA BLA BLA</Text>
        </SafeAreaView>
      </>
    );
  }
}
