import { combineReducers } from "redux";
import { ADD_PAY_CHECK, REMOVE_PAY_CHECK } from '../constants.js';


function payCheckList(state = [], action) {
	if (action.type === ADD_PAY_CHECK) {
		return [
        ...state,
        {
          payCheckDate: action.payCheckDetails.payCheckDate,
          payCheckNumber: action.payCheckDetails.payCheckNumber,
          payCheckAmount:action.payCheckDetails.payCheckAmount
        }
      ]
	} else {
		return state
	}
}

const myPayCheckApp = combineReducers({
  payCheckList
});

export default myPayCheckApp;
