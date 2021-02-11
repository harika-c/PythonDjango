import axios from "axios";


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
    // console.log("action cart",val,count)
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
                axios.get("http://localhost:8001/mywebsite/"+data)
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
        axios.get("http://localhost:8001/mywebsite/clothes/"+data)
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
        payload: ""
    }
}