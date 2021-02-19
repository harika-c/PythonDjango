export const  LoggedInUser_Reducer=(state={},action)=>{
    switch(action.type){
        case "login":
            return {
                state: action.payload,
                isLoggedIn : true
            }
        case "logout_user":
            return {
                state : undefined
            }
        default :
            return state
    }
}

