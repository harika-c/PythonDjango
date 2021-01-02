import {initialiseState} from '../state';

var lastId=0;
export default function reducers(state=[],actions){
    if(actions.type=="bugs"){
        console.log("reducer bugs")
        return [ ...state, 
        {
            id: ++lastId,
            description: {
                data: actions.payload
            }
        }
    ]
    }else if(actions.type=="resolved"){
        return {}
    }
    return state
}