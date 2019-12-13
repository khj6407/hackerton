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
  state = {
    month: 4,
    loading: false
  };

  componentDidMount = async () => {
    let date = new Date();
    let day;
    let month;
    try {
      setTimeout(() => {
        console.log("setTime");
      }, 3000);
      day = await date.getDay();
      month = (await date.getMonth()) + 1;
    } catch (error) {
      alert("실패다");
    } finally {
      console.log("setTimeAfter");
      this.setState({
        viewDay: day,
        viewMonth: month,
        loading: true
      });
    }
  };

  render() {
    console.log("render");
    const { loading, viewMonth } = this.state;
    return loading ? (
      <View style={styles.container}>
        <Provider store={store}>
          <StatusBar barStyle="dark-content" />
        </Provider>
        <Calendar />

        <TouchableOpacity
          onPress={() => this._changeMonth(3)}
        ></TouchableOpacity>

        <Text style={styles.container}>{viewMonth}월</Text>

        <ScrollView>
          {date[viewMonth].map(day => (
            <Text>{day}</Text>
          ))}
        </ScrollView>
      </View>
    ) : (
      <StartPage />
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
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  month: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default App;
