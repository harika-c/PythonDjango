import { bindActionCreators } from "redux";

const Counter =(state=0,action)=>{

    switch(action.type){
        case "incre":
            return state+1;
        case "decre":
            return state-1;
        default :
            return state
    }

}

export default Counter;