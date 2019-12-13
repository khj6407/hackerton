import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { date } from "./models/dateData";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Button from "./components/Button";
import reducer from "./reducer";

let store = createStore(reducer);

//test commit

class App extends React.Component {
  render() {
    console.log(date[2]);
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <StatusBar barStyle="dark-content" />
          <Button iconName="calendar-plus-o" size={40} />
          <Button iconName="calendar-minus-o" size={40} />
          <Button iconName="calendar-times-o" size={40} />
          <Button iconName="calendar-check-o" size={40} />
        </Provider>
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
