export const  LoggedInUser_Reducer=(state={},action)=>{
    switch(action.type){
        case "login":
            return {
                state: action.payload,
                isLoggedIn : true
            }
        case "logout":
            return {
                state : undefined
            }
        default :
            return state
    }
}

