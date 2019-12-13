import AddContent from "./AddContentPresenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as tomatoActions } from "../../../reducer";

mapStateProps = state => {
  const { textI } = state;

  return {
    textI
  };
};

mapDispatchToProps = dispatch => {
  return {
    textInput: bindActionCreators(tomatoActions.textInput, dispatch)
  };
};

export default connect(mapStateProps, mapDispatchToProps)(AddContent);
