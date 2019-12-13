import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { date } from "./models/dateData";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Button from "./components/Button";
import reducer from "./reducer";
import Calendar from "./components/Calendar";
import AddContent from "./components/TextInput/AddContent";
import StartPage from "./components/Start/startPresenter";
let store = createStore(reducer);

class App extends React.Component {
  constructor(props) {
    super(props);

    let date = new Date();
    const cuurentMonth = date.getMonth() + 1;
    this.setState({
      cuurentMonth
    });
  }

  state = {
    month: 4
  };

  render() {
    const { month, cuurentMonth } = this.state;
    console.log(cuurentMonth);
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <StatusBar barStyle="dark-content" />
          <AddContent />
          <StartPage />
        </Provider>
        <Calendar />

        <TouchableOpacity onPress={() => this._changeMonth(3)}>
          <Text>{date[month].map}</Text>
        </TouchableOpacity>

        <Text>{month}월</Text>

        <ScrollView>
          {date[month].map(day => (
            <Text>{day}</Text>
          ))}
        </ScrollView>
      </View>
    );
  }

  _changeMonth = data => {
    this.setState({
      month: data
    });
  };
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
