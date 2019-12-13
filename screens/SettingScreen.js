import React from "react";
import {View, Text, StyleSheet} from "react-native";

class SettingScreen extends React.Component{
  render(){
    return(
      <View style={styles.setscr}>
        <Text>SettingScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  setscr:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
  });

  export default SettingScreen;