import { createStore, combineReducers } from "redux";

const initialState = {
  count: 0,
  isChecked: false,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const checkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK":
      return {
        ...state,
        isChecked: !state.isChecked,
      };
    default:
      return state;
  }
};

const appReducer = combineReducers({
  counter: countReducer,
  check: checkReducer,
});

const store = createStore(appReducer);

export default store;
