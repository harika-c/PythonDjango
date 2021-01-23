

export const CartReducer=(state=[],action)=>{
    switch(action.type){
        case "addtocart":
            console.log('addtocart reducer..',state,'..',state.item,'........data..',action.data)
            var atc={}
            var arr={
                count:action.payload,
                "items":[]
            }
            var item=[]
            if(state.item!=undefined){
                console.log('defined')
                 atc= {
                    
                    // state: [action.data + parseInt(state.state, 10)],
                    ...state.item,
                    item: action.payload
                }
               
                console.log('atc reducer',atc)
                return atc;
            }else{
                console.log(" undefined..",state.state)
            }
            return {  item: action.payload};

        case "removefromcart":
            return{
                state:  action.payload
            }
         default:
             return state;   
    }

}