// import {store} from './store';

import { createStore } from "redux";
import {multiple_reducers} from './Reducers/multiple_reducers';


const store =createStore(multiple_reducers);
store.dispatch({
    type: "bugs",
    payload : "hello bugs"

})
console.log('...............')
store.dispatch({
    type: "bugs",
    payload : "bugs2"

})
store.dispatch({
    type: "bugs",
    payload : "bugs3"

})
function App(){
    return(
        <div>
            {console.log(store.getState())}
            {store.getState().redu.map(a=>(<div>{a.description.data}</div>))}
            </div>
    )
}

export default App;


