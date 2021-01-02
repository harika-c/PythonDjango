
// const state1={
//     flow:[],
//     inse:[], 
//     gras:[],
//     anim:[]
// }
const Reducer_Flower=(state=[] , action)=>{
    
    switch(action.type){
        case "f1":
            console.log("flower reducer...///",state,';;;',action.payload)
            return { 
                ...state, state: action.payload
            };
            // return {...state1, flow: action.payload}
            
        case "i1":
            console.log("insect reducer...///",state.inse)
            return { 
                ...state, inse : state.inse.concat(action.payload)
            };
            // return { inse : state.inse.concat(action.payload)};
        case "g1":
            return { 
                ...state,gras : state.gras.concat(action.payload) };
        case "a1":
            return { 
                ...state,anim : state.anim.concat(action.payload)};
        default :
            console.log("..///",action.type)
            return state
    }
}

export default Reducer_Flower;