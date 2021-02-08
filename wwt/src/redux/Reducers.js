
export const Reducers=(state=[],action)=>{

    switch(action.type){
        case "filter":
            console.log('...reducer',action.payload)
            return {
                state: action.payload
            }
        default :
            return state;
    }
}