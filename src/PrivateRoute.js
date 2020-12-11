const { React,useContext } = require("react")
const { Route , Redirect } = require("react-router-dom")
const { AuthContext } = require("./Auth")


const PrivateRoute=({component :RouteComponent,...rest})=>{
    const {currentUser} = useContext(AuthContext)
    return (
        <Route
            {...rest}
            render={routeProps=>
                !!currentUser ? ( 
                    <RouteComponent {...routeProps}/>
                ):(
                    <Redirect to={"/login"}/>
                )}
        />
    )
    
}