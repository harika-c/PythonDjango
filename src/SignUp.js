import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
const { useCallback } = require("react");
const { default: app } = require("./base");
  
const SignUp =()=>{
    let history = useHistory();
    const handleSignUp=useCallback(async event=>{
        event.preventDefault();
        const {email,password}=event.target.elements;
        try{
            await app.auth().createUserWithEmailAndPassword(email.value,password.value);
            history.push("/");
        }
        catch(error){
            alert(error);
        }
    },[history]);

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    Username:
                    <input name="email" type="email" placeholder="Email"/>
                </label>
                <label>
                    Password:
                    <input name="password" type="password" placeholder="Password"/>
                </label>
                <button type="submit">Sign Up</button>
            </form>
            </div>
    );
};
export default withRouter(SignUp);