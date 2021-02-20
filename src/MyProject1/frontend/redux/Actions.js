import axios from "axios";
import { BACKEND_SERVER, BACKEND_CART_URL, CATEGORY_URL } from "../../Config";
import store from '../Store';

export const postCall=(aa)=>{
    return {
        type:"POST",
        payload : aa
    }
}
export const womensWearCall=(aa)=>{
    return {
        type: "womenswear",
        payload: aa
    }
}
export const mensWearCall=(aa)=>{
    return{
        type:"menswear",
        payload: aa
    }
}
export const clothesCall=(aa)=>{
    return{
        type:"clothescall",
        payload: aa
    }
}
export const addToCartAction=(val)=>{
    return (dispatch)=>{
        dispatch(addToCart(val));
        dispatch(persistentCart());
    }
    
}
export const persistentCart=()=>{
    console.log('persistent cart ,,',store.getState())
    // axios cart call and push store .getstate().cartreducer & store.getState().loggedin_reducer
    
    var send_data= {
        user_data : store.getState().loggedin_reducer,
        cart_data : store.getState().cartreducer
    }
    return ()=>{
        axios.post(BACKEND_CART_URL,send_data)
        .then(res=>console.log('...>>>>>>>>>>>>>',res))
        .catch(err=>console.log(err))
    }
}
export const addToCart=(val)=>{
    console.log("action cart",val)
    return {
        type:"addtocart",
        payload: val,
    }
}
export const fetchApi=(data)=>{
    
    return (dispatch)=>{
        // switch(){
        //     case "flo":
                console.log("actions ",data)
                axios.get(BACKEND_SERVER+"mywebsite/"+data)
                .then(res=>{
                    console.log(res.data,"axios res...")
                    dispatch(postCall(res.data));
                })
                .catch(err=>console.log(err,'axios error...'))
            // case "gra":

        // }
    }
}
export const fetchData=(data)=>{
    return (dispatch)=>{
        console.log("actions ",data);
        axios.get(CATEGORY_URL+data)
        .then(res=>{
            console.log(res.data,"axios res...");
            
            dispatch(clothesCall(res.data))
            
        })
        .catch(err=> console.log(err,"axios clothes error reponse .."))    
    }
}
export const fetchNone=()=>{
    return {
        type:"None",
        
    }
}
export const logout=()=>{
    return(dispatch)=> {
        dispatch(logoutUser())
        dispatch(clearCart());
        
    }
}
export const logoutUser=()=>{
    return  {
        type: "logout_user"
    }
}
export const login=(userData)=>{
    console.log('login actions')
    return {
        type: "login",
        payload : userData
    }
}
export const clearCart=()=>{
    return {
        type: "clearcart"
    }
}