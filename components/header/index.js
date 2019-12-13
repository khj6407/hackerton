import StartPage from "../Start/startPresenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as tomatoActions } from "../../../reducer";

mapStateProps = state => {
  const { Header } = state;

  return {
    Header
  };
};

mapDispatchToProps = dispatch => {
  return {
    Header: bindActionCreators(tomatoActions.Header, dispatch)
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Header);
