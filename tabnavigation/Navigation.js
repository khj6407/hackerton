import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";

const Tabnavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: { title: "Home" }
    },
    SettingScreen: {
      screen: SettingScreen,
      navigationOptions: { title: "Setting" }
    }
  },
  {
    tabBarOptions: {
      style: {}
    }
  }
);

export default createAppContainer(Tabnavigator);
