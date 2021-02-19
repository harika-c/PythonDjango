import axios from "axios";
import { BACKEND_SERVER } from "../../Config";


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
        axios.get(BACKEND_SERVER+"mywebsite/clothes/"+data)
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