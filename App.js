import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import { date } from "./models/dateData";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Button from "./components/Button";
import reducer from "./reducer";
import Calendar from "./components/Calendar";
import AddContent from "./components/TextInput/AddContent";
let store = createStore(reducer);

//test commit

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <StatusBar barStyle="dark-content" />
          <AddContent />
        </Provider>
        <Calendar />
        <ScrollView>
          {date[3].map(day => (
            <Text>{day}</Text>
          ))}
        </ScrollView>
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
