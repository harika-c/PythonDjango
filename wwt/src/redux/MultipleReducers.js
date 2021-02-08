import {combineReducers} from 'redux';
import {Reducers} from './Reducers';


const MultipleReducers=combineReducers({
    reducer: Reducers
})

export default MultipleReducers;