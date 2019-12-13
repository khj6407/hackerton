import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { date } from "../models/dateData";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Button from "../components/Button/buttonPresenter";
import reducer from "../reducer";
import Calendar from "../components/Calendar";
import AddContent from "../components/TextInput/AddContent";
import StartPage from "../components/Start/startPresenter";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

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
        <View style={styles.upArea}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.monthBtn}>
            <TouchableOpacity onPress={() => this._minusMonth()}>
              <FontAwesome name="chevron-left" size={30}></FontAwesome>
            </TouchableOpacity>

            <Text style={styles.month}>{viewMonth}월</Text>
            <TouchableOpacity onPress={() => this._plusMonth()}>
              <FontAwesome name="chevron-right" size={30}></FontAwesome>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.downArea}>
          <View style={{ flexDirection: "row" }}>
            {date[viewMonth].map(day =>
              day < 8 ? (
                <TouchableOpacity>
                  <Text style={styles.dayTxt1}>{day}</Text>
                </TouchableOpacity>
              ) : null
            )}
          </View>

          <View style={{ flexDirection: "row" }}>
            {date[viewMonth].map(day =>
              day > 7 && day < 15 ? (
                <TouchableOpacity>
                  <Text style={styles.dayTxt2}>{day}</Text>
                </TouchableOpacity>
              ) : null
            )}
          </View>

          <View style={{ flexDirection: "row" }}>
            {date[viewMonth].map(day =>
              day > 14 && day < 22 ? (
                <TouchableOpacity>
                  <Text style={styles.dayTxt3}>{day}</Text>
                </TouchableOpacity>
              ) : null
            )}
          </View>

          <View style={{ flexDirection: "row" }}>
            {date[viewMonth].map(day =>
              day > 21 && day < 29 ? (
                <TouchableOpacity>
                  <Text style={styles.dayTxt3}>{day}</Text>
                </TouchableOpacity>
              ) : null
            )}
          </View>

          <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
            {date[viewMonth].map(day =>
              day > 28 ? (
                <TouchableOpacity>
                  <Text style={styles.dayTxt4}>{day}</Text>
                </TouchableOpacity>
              ) : null
            )}
          </View>
        </View>
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

  _minusMonth = () => {
    const { viewMonth } = this.state;

    if (viewMonth === 1) {
      return;
    }

    this.setState({
      viewMonth: viewMonth - 1
    });
  };

  _plusMonth = () => {
    const { viewMonth } = this.state;

    if (viewMonth === 12) {
      return;
    }

    this.setState({
      viewMonth: viewMonth + 1
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  month: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 60,
    marginRight: 60,
    color: "#2C3A47"
  },
  upArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  downArea: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  monthBtn: {
    flexDirection: "row",
    marginTop: 50
  },
  dayTxt1: {
    backgroundColor: "#FDA7DF",
    width: 37,
    height: 37,
    color: "#Fff",
    textAlign: "center",
    borderRadius: 15,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 23,
    marginBottom: 15
  },
  dayTxt2: {
    backgroundColor: "#FDA7DF",
    width: 37,
    height: 37,
    color: "#Fff",
    textAlign: "center",
    borderRadius: 15,
    marginLeft: 8,
    marginRight: 9,
    marginBottom: 15,
    fontSize: 23
  },
  dayTxt3: {
    backgroundColor: "#FDA7DF",
    width: 37,
    height: 37,
    color: "#Fff",
    textAlign: "center",
    borderRadius: 15,
    marginLeft: 9,
    marginRight: 8,
    fontSize: 23,
    marginBottom: 15
  },
  dayTxt4: {
    backgroundColor: "#FDA7DF",
    width: 37,
    height: 37,
    color: "#Fff",
    textAlign: "center",
    borderRadius: 15,
    marginRight: 6,
    marginLeft: 11,
    fontSize: 23
  }
});

export default App;
