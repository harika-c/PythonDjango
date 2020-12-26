import React from 'react';
import {createStore} from "redux";
import ReducerMultiple from "./reducers/ReducersMultiple";
import Data from './Data';
import {Provider} from 'react-redux';

const stores1=createStore(ReducerMultiple);

function App(){
    
    return (
        <Provider store={stores1}>
            <Data/>
        </Provider>
    );
}

export default App