// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from "react";
import { SafeAreaView, View, StyleSheet, Text, Linking } from "react-native";
import { Icon } from "react-native-elements";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import WelcomeScreen from "../../pages/Welcome";

const DrawerLeft = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={styles.customItem}>
          <Icon
            color={"#25D366"}
            style={styles.iconStyle}
            type="font-awesome"
            name="whatsapp"
          />
          <Text
            style={styles.linkWeb}
            onPress={() => {
              Linking.openURL("https://aboutreact.com/");
            }}
          >
            Nosso WhatsApp
          </Text>
        </View>
        <View style={styles.customItem}>
          <Icon
            color={"#4267B2"}
            style={styles.iconStyle}
            type="font-awesome"
            name="facebook"
          />
          <Text
            style={styles.linkWeb}
            onPress={() => {
              Linking.openURL("https://aboutreact.com/");
            }}
          >
            Nosso Facebook
          </Text>
        </View>
      </DrawerContentScrollView>
      <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
        by: Diego Moreira
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  linkWeb: {
    marginLeft: 25,
    color: "#777",
  },
});

export default DrawerLeft;
