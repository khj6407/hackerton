import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddContent from "./components/TextInput/AddContent";
import { date } from "./models/dateData";

class App extends React.Component {
  render() {
    console.log(date[2]);
    return (
      <View style={styles.container}>
        <Text>daily date</Text>
        <AddContent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
