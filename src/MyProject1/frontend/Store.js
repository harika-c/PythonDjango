import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Multiple_Reducer from "./redux/Multiple_Reducer";

function saveToLocalStorage(state){
    console.log(state,'...setitem.....state......')
    try{
        localStorage.setItem('ccart',JSON.stringify(state))
    }
    catch(e){
        console.log(e)
    }
}
function getDataFromLocalStorage(){
    console.log('....get item....')
    try{
        if(localStorage.getItem('ccart')==null)
            return undefined;
        return JSON.parse(localStorage.getItem('ccart'))
    }
    catch(e){
        console.log(e);
        return undefined;
    }
}
const persistedState=getDataFromLocalStorage()

const store=createStore(Multiple_Reducer,persistedState,applyMiddleware(thunk))

store.subscribe(()=>{
    console.log(".....before subscribe .......")
    saveToLocalStorage(store.getState())
    console.log(".....subscribe .......")
})
export default store;