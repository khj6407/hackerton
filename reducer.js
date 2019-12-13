//1. import

//2. Action
const REDUX_TEST = "REDUX_TEST";
const TEXT_INPUT = "TEXT_INPUT";
const START_PAGE = "START_PAGE";

//3. Action Creator
const reduxTest = () => {
  return {
    type: REDUX_TEST
  };
};

const textInput = () => {
  return {
    type: TEXT_INPUT
  };
};

const startPage = () => {
  return {
    type: START_PAGE
  };
};

//4. Reducer
const initialState = {
  reduxT: "redux connection complete",
  textI: "redux connection complete",
  StartP: "redux connection complete"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REDUX_TEST:
      return applyReduxTest(state);
    case TEXT_INPUT:
      return applyTextInput(state);
    case START_PAGE:
      return applyStartPage(state);
    default:
      return state;
  }
};

//5. Reducer Function
const applyReduxTest = state => {
  return {
    ...state
  };
};

const applyTextInput = state => {
  return {
    ...state
  };
};

const applyStartPage = state => {
  return {
    ...state
  };
};

//6. Export Action Creator

const actionCreator = {
  reduxTest,
  textInput,
  startPage
};

export { actionCreator };

//7. Export Reducer
export default reducer;
