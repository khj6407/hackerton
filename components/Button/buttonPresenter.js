import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import PropTypes from "prop-types";

const Button = ({ iconName, action = null, size = 20 }) => {
  return (
    <TouchableOpacity onPress={action} style={styles.btn}>
      <FontAwesome name={iconName} size={size} />
    </TouchableOpacity>
  );
};

Button.prototype = {
  iconName: PropTypes.string.isRequried,
  action: PropTypes.func.isRequried,
  size: PropTypes.number.isRequried
};

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Button;
