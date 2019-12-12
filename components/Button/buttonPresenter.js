import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class Button extends React.Component {
  render() {
    const { reduxT } = this.props;

    console.log(reduxT);
    return (
      <TouchableOpacity>
        <Text>testtest</Text>
      </TouchableOpacity>
    );
  }
}
export default Button;
