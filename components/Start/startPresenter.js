import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class StartPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>오늘</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6c5ce7"
  },
  text: {
    color: "#a29bfe",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22
  }
});

export default StartPage;
