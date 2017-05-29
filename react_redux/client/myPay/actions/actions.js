import { ADD_PAY_CHECK, REMOVE_PAY_CHECK } from '../constants.js';

export function addPayCheck(payCheckDetails) {
  return { type: ADD_PAY_CHECK, payCheckDetails }
}

export function removePayCheck(index) {
  return { type: REMOVE_PAY_CHECK, index }
}
