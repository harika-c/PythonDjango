import store from '../Store';

export const CartReducer=(state=[],action)=>{
    switch(action.type){
        case "addtocart":
            var atc=[] 
            console.log('atc reducer',atc)
            
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