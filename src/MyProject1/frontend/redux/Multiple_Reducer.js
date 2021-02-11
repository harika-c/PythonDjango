import {combineReducers} from 'redux';
import {Reducer_Flower} from './Reducer_Flower';
import {CartReducer} from './CartReducer';

const Multiple_Reducer=combineReducers({
    reducer: Reducer_Flower,
    cartreducer: CartReducer
})

export default Multiple_Reducer;