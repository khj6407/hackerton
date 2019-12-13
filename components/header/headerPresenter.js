import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FontAwesome name={"calendar"} size={35} />
        <Text style={styles.text}>밤샘 결과물</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginLeft: 30
  },
  text: {
    color: "#182C61",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
    marginLeft: 20
  }
});

export default Header;
