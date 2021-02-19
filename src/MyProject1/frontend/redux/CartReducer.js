import store from '../Store';

export const CartReducer=(state=[],action)=>{
    switch(action.type){
        case "addtocart":
            var atc=[] 
            // var cool=[...state]
            console.log('atc reducer',state,Object.keys(state).length)
            if(Object.keys(state).length===0){
                return [action.payload]
            }
            atc=[...state,
               action.payload,
                ]
            
            return atc

        case "removefromcart":
            return{
                state:  action.payload,
            }
        case "clearcart":
            return {}
         default:
             return state;   
    }

}