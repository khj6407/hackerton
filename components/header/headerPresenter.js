import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FontAwesome name={"calendar"} size={30} />
        <Text style={styles.text}>밤샘 결과물</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    flexDirection: "row",
    marginLeft: -190,
    alignItems: "flex-end"
  },
  text: {
    color: "#182C61",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 25,
    marginLeft: 18
  }
});

export default Header;
