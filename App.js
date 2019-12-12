import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { date } from "./models/dateData";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Button from "./components/Button";
import reducer from "./reducer";

let store = createStore(reducer);

class App extends React.Component {
  render() {
    console.log(date[2]);
    return (
      <Provider store={store}>
        <Button />
      </Provider>
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
