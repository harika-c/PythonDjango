// import { red } from "@material-ui/core/colors";

export const initialState= {
    basket :[],
};

export const getBasketTotal =(basket)=>
    basket?.reduce((value,i )=>i.price+value,0 );

const reducer = (state,action) =>{
    console.log(state,'.........',action)
    // console.log(...state)
    console.log([...state.basket,'[[[',action.item])
    switch (action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket ,action.item]
            }
            default:
                return state;
    }
};

export default reducer;