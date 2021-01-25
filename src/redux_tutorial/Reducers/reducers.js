import {initialiseState} from '../state';

var lastId=0;
export default function reducers(state=[],actions){
    if(actions.type=="bugs"){
        console.log("reducer",state)
        return [ ...state, 
        {
            
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