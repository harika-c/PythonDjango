
import { withRouter } from "react-router-dom";
import React,{useContext,useCallback} from "react";
import app from './base';
import {AuthContext} from './Auth';
const { useHistory, Redirect} = require("react-router-dom")
const Login=()=>{

    const history=useHistory();
    const handleLogin=useCallback(
        async event => {
            event.preventDefault();
            const {email,password}=event.target.elements;
            try{
                app.auth().signInWithEmailAndPassword(email.value,password.value);
                history.push('/');
            }
            catch(error){
                alert(error)
            }
        },
        [history],
    )
    const {currentUser} = useContext(AuthContext)
    if(currentUser){
        return <Redirect to ="/" />
    }
    return (
        <div>
            Login:
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type="text"/>
                </label>
                <label>
                    Password:
                    <input type="text"/>
                </label>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
    }

export default withRouter(Login);
