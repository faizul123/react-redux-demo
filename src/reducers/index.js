import counter from './counter';
import loggedIn from './loggedIn';
import { combineReducers } from 'redux';

export const allReducers = combineReducers ({
        counter,
        loggedIn
});