import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FontAwesome name={"calendar"} size={40} />
        <Text style={styles.text}>오 늘</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: 30,
    marginTop: 60
  },
  text: {
    color: "#a29bfe",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    marginLeft: 20,
    padding: 5
  }
});

export default Header;
