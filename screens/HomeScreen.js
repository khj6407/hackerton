import React from "react";
import {View, Text, StyleSheet} from "react-native";

class HomeScreen extends React.Component{
  render(){
    return(
      <View style={styles.homescr}>
       <Text>HomeScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homescr: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
  });

  export default HomeScreen;