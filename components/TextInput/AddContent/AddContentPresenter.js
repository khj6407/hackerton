import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class AddContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Contents.." />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 300,
    height: 300,
    padding: 10,
    marginTop: 20
  }
});

export default AddContent;
