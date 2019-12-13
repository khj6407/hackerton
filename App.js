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

class App extends React.Component {
  render() {
    return <Tabnavigator />;
  }
}
export default App;
