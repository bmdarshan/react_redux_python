import fetch from 'isomorphic-fetch'

import { ADD_PAY_CHECK, REMOVE_PAY_CHECK, FETCH_SAVED_PAYCHECKS, REQUEST_SAVED_PAYCHECKS, RECIEVE_SAVED_PAYCHECKS } from '../constants.js';

export function addPayCheck(payCheckDetails) {
    return { type: ADD_PAY_CHECK, payCheckDetails }
}

export function removePayCheck(index) {
    return { type: REMOVE_PAY_CHECK, index }
}

export function requestSavedPaychecks(options) {
    return { type: REQUEST_SAVED_PAYCHECKS, options }
}

export function recieveSavedPaychecks(options, json) {
    return {
        type: RECIEVE_SAVED_PAYCHECKS,
        options,
        posts: json,
        receivedAt: Date.now()
    }
}

export function fetchSavedPaychecks(options) {
    return dispatch => {
        dispatch(requestSavedPaychecks(options))
        return fetch(options.url)
            .then(response => response.json())
            .then(json => dispatch(recieveSavedPaychecks(options, json)))
    }
}
