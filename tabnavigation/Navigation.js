import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import { FontAwesome } from "@expo/vector-icons";
const Tabnavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Calendar",
        tabBarIcon: (
          <FontAwesome
            style={{ color: "#ffcccc" }}
            name={"calendar"}
            size={16}
          />
        )
      }
    },
    SettingScreen: {
      screen: SettingScreen,
      navigationOptions: {
        title: "List",
        tabBarIcon: (
          <FontAwesome style={{ color: "#ffcccc" }} name={"bars"} size={16} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#C56CF0"
      },
      inactiveTintColor: "#F7F1E3",
      activeTintColor: "#2C2C54",
      showIcon: true,
      labelStyle: {
        fontSize: 15
      }
    }
  }
);

export default createAppContainer(Tabnavigator);
