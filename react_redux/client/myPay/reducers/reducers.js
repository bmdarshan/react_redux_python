import { combineReducers } from "redux";
import { ADD_PAY_CHECK, REMOVE_PAY_CHECK } from '../constants.js';


function addPayCheck(state = {payCheckList:[]}, action) {
	console.log(action)
	if (action.type === ADD_PAY_CHECK) {
		let newState = {
			payCheckList: state.payCheckList.concat(action.payCheckDetails)
		}
		return newState
	} else {
		return state
	}
}

function removePayCheck(state = [], action) {
  return state;
}

const myPayCheckApp = combineReducers({
  addPayCheck,
  removePayCheck
});

export default myPayCheckApp;
