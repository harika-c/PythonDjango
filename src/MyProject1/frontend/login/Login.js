import {useState} from 'react';
import './Login.css';
import axios from 'axios';

const Login =()=>{
    const [exp, setexp] = useState({"usern":null,"pass":null})

    const submitFunct=(e)=>{
        e.preventDefault();
        console.log('loginfunct...',exp)
        //perform validations , on success send data to backend

        axios.post('http://localhost:8001/mywebsite/logindata',{
            username: exp.usern,
            password: exp.pass
        })
        .then(res=>{
            console.log('login axios res',res)
            })
        .catch(err=>console.log(err))
        
    }
    const change=(e)=>{
        const {name,value}=e.target
        console.log(name,value);
        setexp(prevState=>({...prevState,[name]:value}))
        
    }
    return (
        <div>
            <h4>
                Login 
            </h4>
            {console.log("render")}
            <form onSubmit={e=>submitFunct(e)}>
                

                <div class="container">
                    <label for="uname"><b>Username</b></label><br/>
                    <input type="text" placeholder="Enter Username"  onInput={(e)=>change(e)} name="uname" required /><br/>

                    <label for="psw"><b>Password</b></label><br/>
                    <input type="password" placeholder="Enter Password" onInput={(e)=>change(e)} name="psw" required /><br/>
                        
                    <button type="submit">Login</button> <br/>
                    <label>
                    <input type="checkbox" checked="checked" name="remember"/> Remember me
                    </label>
                </div>

            <div class="container" style={{backgroundColor:"#f1f1f1"}}>
                
                <span class="psw"><a href="#">Forgot password?</a></span>
            </div>
            </form>
        </div>
    )
}

export default Login;
