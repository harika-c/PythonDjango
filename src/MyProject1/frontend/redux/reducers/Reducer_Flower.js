
// const state1={
//     flow:[],
//     inse:[], 
//     gras:[],
//     anim:[]
// }
const initialState={
    banners:[],
    clothes:[],
    addToCart:{}
}
export const Reducer_Flower=(state=initialState  , action)=>{
    
    switch(action.type){
        case "POST": 
            console.log(action.payload,".....reducer payload.post......")

            const val={
                state: action.payload
            }
            console.log('....',val)
            return val;
        case "clothescall":
            console.log(action.payload,".....reducer payload clothes call.......")
            const data2= { 
                // ...state.state,
                 state : action.payload
            };
            return data2
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
        default :
            return state
    }
}

