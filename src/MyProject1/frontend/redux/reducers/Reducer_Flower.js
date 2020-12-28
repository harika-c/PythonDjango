
const state1={
    flow:[],
    inse:[]
}
const Reducer_Flower=(state=state1 , action)=>{
    
    switch(action.type){
        case "f1":
            console.log("flower reducer...///",state.flow,';;;',[action.payload])
            return { flow: state.flow.concat(action.payload)};
            
        case "i1":
            console.log("insect reducer...///",state.inse,';;;',[action.payload])
            return { inse : state.inse.concat(action.payload)};
            
        default :
            console.log("..///",action.type)
            return state
    }
}

export default Reducer_Flower;