import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Tabnavigator from "./tabnavigation/Navigation";
import MainNavigation from "./tabnavigation/MainNavigation";

class App extends React.Component {
  render() {
    return <MainNavigation />;
  }
}
export default App;
