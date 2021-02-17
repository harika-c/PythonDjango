
// const state1={
//     flow:[],
//     inse:[], 
//     gras:[],
//     anim:[]
// }

export const Reducer_Flower=(state={} , action)=>{
    
    switch(action.type){
        case "POST": 
            console.log(action.payload,".....reducer payload.post......")

            const val={
                state: action.payload
            }
            console.log('....',val)
            return val;
        case "clothescall":
            
            const d= { 
                // ...state,
                 state : action.payload
            };
            console.log(action.payload,".....reducer payload womens call.......",d)
            return d
        case "womenswear":
            
            const data2= { 
                // ...state,
                 state : action.payload
            };
            console.log(action.payload,".....reducer payload womens call.......",data2)
            return data2
        case "menswear":
            
            const data= { 
                // ...state,
                    state : action.payload
            };
            console.log(action.payload,".....reducer payload mens call.......",data)
            return data
        
        case "None":
            console.log("None reducer...///",state)
            return { 
                state : undefined
           };
        

        default :
            return state
    }
}

