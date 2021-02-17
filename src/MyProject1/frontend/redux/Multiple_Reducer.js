import {combineReducers} from 'redux';
import {Reducer_Flower} from './Reducer_Flower';
import {CartReducer} from './CartReducer';
import {LoggedInUser_Reducer} from './LoggedInUser_Reducer';

const Multiple_Reducer=combineReducers({
    reducer: Reducer_Flower,
    cartreducer: CartReducer,
    loggedin_reducer: LoggedInUser_Reducer
})

export default Multiple_Reducer;