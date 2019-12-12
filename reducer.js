//1. import

//2. Action
const REDUX_TEST = "REDUX_TEST";

//3. Action Creator
const reduxTest = () => {
  return {
    type: REDUX_TEST
  };
};

//4. Reducer
const initialState = {
  reduxT: "redux connection complete"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REDUX_TEST:
      return applyReduxTest(state);
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

//6. Export Action Creator

const actionCreator = {
  reduxTest
};

export { actionCreator };

//7. Export Reducer
export default reducer;
