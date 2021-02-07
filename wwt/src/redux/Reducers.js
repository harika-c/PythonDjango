
export const Reducer=(state=[],action)=>{

    switch(actions.type){
        case "filter":
            return {
                state: action.payload
            }
        default :
            return state;
    }
}