import {combineReducers} from 'redux';
import Reducer_Flower from './Reducer_Flower';

const Multiple_Reducer=combineReducers({
    flower: Reducer_Flower
})

export default Multiple_Reducer;