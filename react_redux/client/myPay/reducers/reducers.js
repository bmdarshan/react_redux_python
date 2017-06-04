import { combineReducers } from "redux";
import {
    ADD_PAY_CHECK,
    REMOVE_PAY_CHECK,
    RECIEVE_SAVED_PAYCHECKS,
    REQUEST_SAVED_PAYCHECKS
} from "../constants.js";

function payCheckInformation(
    state = {
        isFetching: false,
        payCheckList: []
    },
    action
) {
    switch (action.type) {
        case ADD_PAY_CHECK:
            return {
                isFetching: false,
                payCheckList: [
                    ...state.payCheckList,
                    {
                        payCheckDate: action.payCheckDetails.payCheckDate,
                        payCheckNumber: action.payCheckDetails.payCheckNumber,
                        payCheckAmount: action.payCheckDetails.payCheckAmount
                    }
                ]
            };
        default:
            return state;
    }
}

function savedPayCheckInformation(
    state = {
        isFetching: false,
        payCheckList: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_SAVED_PAYCHECKS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECIEVE_SAVED_PAYCHECKS:
            return Object.assign({}, state, {
                isFetching: false,
                payCheckList: action.payCheckList,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

const myPayCheckApp = combineReducers({
    payCheckInformation,
    savedPayCheckInformation
});

export default myPayCheckApp;
