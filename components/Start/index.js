import StartPage from "../Start/startPresenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as tomatoActions } from "../../../reducer";

mapStateProps = state => {
  const { StartP } = state;

  return {
    StartP
  };
};

mapDispatchToProps = dispatch => {
  return {
    textInput: bindActionCreators(tomatoActions.startPage, dispatch)
  };
};

export default connect(mapStateProps, mapDispatchToProps)(StartPage);
