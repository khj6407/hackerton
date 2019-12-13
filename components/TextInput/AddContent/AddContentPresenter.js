import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

class AddContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>오늘 뭐 했는지 적어봐 ( •̀.̫•́)✧!!</Text>
        <TextInput
          style={styles.input}
          placeholder="Contents.."
          multiline={true}
        />
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
    width: 350,
    height: 300,
    marginTop: 25,
    borderWidth: 3,
    padding: 10,
    paddingTop: 15,
    borderRadius: 10,
    borderColor: "#8c7ae6"
  },
  text: {
    color: "#a29bfe",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22
  }
});

export default AddContent;
