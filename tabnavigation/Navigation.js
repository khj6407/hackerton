import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import { FontAwesome } from "@expo/vector-icons";

const Tabnavigator = createBottomTabNavigator({
  HomeScreen: {
    screen:HomeScreen,
    navigationOptions: {title:"Calendar", tabBarIcon:<FontAwesome name={""} size={10}/>}
  },
  SettingScreen: {
    screen:SettingScreen,
    navigationOptions: {title:"List"}
    }
},
{
  tabBarOptions: {
    style:{
        backgroundColor: "#c56cf0",
        paddingBottom: 15
    },
    inactiveTintColor:"#f7f1e3",
    activeTintColor : "#2c2c54",
    labelStyle:{
        fontSize:15
    }
    

  }
}
);

export default createAppContainer(Tabnavigator);