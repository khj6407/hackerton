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
let store = createStore(reducer);

class App extends React.Component {
  componentDidMount = async () => {
    let date, month;

    try {
      date = await date.getDay();
      month = await date.getMonth();
    } catch (error) {
      alert("실패다");
    } finally {
      date = date.data.results;
      month = month.data.results;

      this.setState({
        viewDate: date,
        viewMonth: month,
        loading: true
      });
    }
  };

  state = {
    month: 4
  };

  render() {
    const { date, month, viewDate, viewMonth } = this.state;
    console.log(date);
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <StatusBar barStyle="dark-content" />
          <AddContent />
        </Provider>
        <Calendar />

        <TouchableOpacity onPress={() => this._changeMonth(3)}>
          <Text></Text>
        </TouchableOpacity>

        <Text>월</Text>

        <ScrollView></ScrollView>
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
