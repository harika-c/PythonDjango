
// const state1={
//     flow:[],
//     inse:[], 
//     gras:[],
//     anim:[]
// }
export const Reducer_Flower=(state=[]  , action)=>{
    
    switch(action.type){
        case "POST": 
        console.log(action.payload,".....reducer payload.......")
            return {
                state: action.payload
            }
        case "f1":
            const data= { 
                 state : action.payload
            };
            console.log(data.state[0].flower,".....data.......")
            return data
            // return {...state1, flow: action.payload}
            
        case "i1":
            console.log("insect reducer...///",state)
            return { 
                state : action.payload
           };
            // return { 
            //     ...state, inse : state.inse.concat(action.payload)
            // };
            // return { inse : state.inse.concat(action.payload)};
        case "g1":
            return { 
                    state : action.payload
                // ...state,gras : state.gras.concat(action.payload)
             };
        case "a1":
            return { 
                state: action.payload
            }
        default :
            return state
    }
}

