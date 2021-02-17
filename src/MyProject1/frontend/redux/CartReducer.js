import store from '../Store';

export const CartReducer=(state=[],action)=>{
    switch(action.type){
        case "addtocart":
            var atc=[] 
            // var cool=[...state]
            // console.log('atc reducer',state)
            
            atc=[...state,
               action.payload,
                ]
            
            return atc

        case "removefromcart":
            return{
                state:  action.payload,
            }
         default:
             return state;   
    }

}