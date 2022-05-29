import "react-native-gesture-handler";

import * as React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
// Import Custom Sidebar
import DrawerLeft from "./src/shared/components/DrawerLeft";
import Home from "./src/pages/Home";
import WelcomeScreen from "./src/pages/Welcome";
import VejaRevejaScreen from "./src/pages/VejaReveja";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <DrawerLeft {...props} />}
      >
        <Drawer.Screen
          name="Opinião Play"
          options={{
            drawerLabel: "Home",
            drawerIcon: ({ focused }) => (
              <Icon
                color={"#333"}
                style={styles.iconStyle}
                type="font-awesome"
                name="home"
              />
            ),
          }}
          component={Home}
        />

        <Drawer.Screen
          name="Veja e Reveja"
          options={{
            drawerLabel: "Veja e Reveja",
            drawerIcon: ({ focused }) => (
              <Icon
                color={"#FF0000"}
                style={styles.iconStyle}
                type="font-awesome"
                name="play-circle"
              />
            ),
          }}
          component={VejaRevejaScreen}
        />

        <Drawer.Screen
          name="InterajaConosco"
          options={{
            drawerLabel: "Interaja Conosco",
            drawerIcon: ({ focused }) => (
              <Icon
                color={"#394a3f"}
                style={styles.iconStyle}
                type="font-awesome"
                name="comments-o"
              />
            ),
          }}
          component={WelcomeScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 25,
    height: 25,
    zIndex: 99,
  },
});

export default App;
