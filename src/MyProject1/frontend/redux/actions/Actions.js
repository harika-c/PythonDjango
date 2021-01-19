import axios from "axios";


// export const flowers =(aa)=>{
//     return {
//         type: "f1",
//         payload : aa
//     }
// }
// export const insects =(aa)=>{
//     return {
//         type: "i1",
//         payload : aa
//     }
// }
// export const grass=(aa)=>{
//     return {
//         type: "g1",
//         payload: aa
//     }
// }
// export const animations=(aa)=>{
//     return {
//         type: "a1",
//         payload: aa
//     }
// }
export const postCall=(aa)=>{
    return {
        type:"POST",
        payload : aa
    }
}

export const fetchApi=(data)=>{
    
    return (dispatch)=>{
        // switch(){
        //     case "flo":
                console.log("actions ",data)
                axios.get("http://localhost:8001/mywebsite/"+data)
                .then(res=>{
                    console.log(res,"axios res...")
                    dispatch(postCall(res));
                })
                .catch(err=>console.log(err,'axios error...'))
            // case "gra":

        // }
    }
}
