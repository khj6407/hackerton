// import AddContent from "./AddContentPresenter";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreator as tomatoActions } from "../../../reducer";

// mapStateProps = state => {
//   const { textI } = state;

//   return {
//     textI
//   };
// };

// mapDispatchToProps = dispatch => {
//   return {
//     textInput: bindActionCreators(tomatoActions.textInput, dispatch)
//   };
// };

// export default connect(mapStateProps, mapDispatchToProps)(AddContent);

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";

class AddContent extends Component {
  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {params.month}월 {params.day}일
        </Text>
        <Text style={styles.text}>오늘 뭐 했는지 적어봐 ( •̀.̫•́)✧!!</Text>
        <TextInput
          style={styles.input}
          placeholder="Contents.."
          multiline={true}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>저장</Text>
          <Text style={styles.btnTxt}>수정</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 30,
    alignItems: "center"
  },
  input: {
    width: 350,
    height: 300,
    marginTop: 25,
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
    borderColor: "#8c7ae6",
    fontSize: 20
  },
  text: {
    color: "#a29bfe",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    color: "#182C61"
  },
  btn: {
    flexDirection: "row"
  },
  btnTxt: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#2c2c54",
    textAlign: "center",
    margin: 30,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20
  }
});

export default AddContent;
