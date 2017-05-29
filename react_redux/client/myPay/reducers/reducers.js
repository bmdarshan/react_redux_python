import { combineReducers } from "redux";

function addPayCheck(state = [], action) {
  return [
    ...state,
    {
      payCheckList: action.payCheckDetails
    }
  ];
}

function removePayCheck(state = [], action) {
  return state;
}

const myPayCheckApp = combineReducers({
  addPayCheck,
  removePayCheck
});

export default myPayCheckApp;
