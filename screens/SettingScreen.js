import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

class SettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.conn}>
          <FontAwesome name={"calendar-check-o"} size={43} />
          <Text style={styles.text}>11월 30일</Text>
        </View>
        <View style={styles.con}>
          <Text style={styles.con}>1️⃣ 해커톤.....</Text>
          <Text style={styles.con}>2️⃣ 졸리다..</Text>
          <Text style={styles.con}>3️⃣ 자도 자도 졸리다... </Text>
        </View>
        <View style={styles.conn}>
          <FontAwesome name={"calendar-check-o"} size={43} />
          <Text style={styles.text}>12월 1일</Text>
        </View>
        <View style={styles.con}>
          <Text style={styles.con}>1️⃣ 집 가고 싶다... </Text>
          <Text style={styles.con}>2️⃣ 300시간만 자고 싶다... </Text>
          <Text style={styles.con}>3️⃣ 얼른 끝나라... </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 60,
    marginLeft: 30
  },
  text: {
    color: "#182C61",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 32
  },
  con: {
    flexDirection: "column",
    marginTop: 30,
    marginBottom: 28,
    fontSize: 25,
    marginRight: 0
  },
  conn: {
    flex: 1,
    flexDirection: "row"
  }
});

export default SettingScreen;
