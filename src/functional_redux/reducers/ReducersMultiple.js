import isLoggedIn from './isLoggedIn';
import Counter from './Counter';
import {combineReducers} from 'redux';

const  ReducerMultiple=combineReducers({
    loggedIn: isLoggedIn,
    count: Counter
});

export default ReducerMultiple;