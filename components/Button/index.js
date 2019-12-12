import Button from "./buttonPresenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as tomatoActions } from "../../reducer";

mapStateProps = state => {
  const { reduxT } = state;

  return {
    reduxT
  };
};

mapDispatchToProps = dispatch => {
  return {
    reduxTest: bindActionCreators(tomatoActions.reduxTest, dispatch)
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Button);
