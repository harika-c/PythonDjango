import {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import {useDispatch} from 'react-redux';

import axios from 'axios';
import { LOGIN_URL } from '../../Config';
import { useHistory } from 'react-router-dom';
import './Login.css';
import { login } from '../redux/Actions';


const Login =()=>{
    const [exp, setexp] = useState({})
    const history=useHistory();
    var [message, setMessage] = useState({})
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const submitFunct=(e)=>{
        e.preventDefault();
        console.log('loginfunct...',exp)
        axios.post(LOGIN_URL,exp)
        .then(res=>{
            console.log('login axios res',res.data,typeof(res.data)=='string')
            if(typeof(res.data)=='string'){
                console.log('string')
                setMessage(res.data)
                setShow(true)

            }else{
                console.log('object')
                history.push("/");
                dispatch(login(res.data))
            }
            })
        .catch(err=>console.log(err))
        
    }
    const change=(e)=>{
        
        setexp(prevState=>({...prevState,[e.target.name]:e.target.value}))
        
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
                    <input type="text" placeholder="Enter Username"  onInput={(e)=>change(e)} name="username" required /><br/>

                    <label for="psw"><b>Password</b></label><br/>
                    <input type="password" placeholder="Enter Password" onInput={(e)=>change(e)} name="password" required /><br/>
                        
                    <button className="submit_buttons" type="submit">Login</button> <br/>
                    <label>
                    <input type="checkbox" checked="checked" name="remember"/> Remember me
                    </label>
                </div>

            <div class="container" style={{backgroundColor:"#f1f1f1"}}>
                
                <span class="psw"><a href="#">Forgot password?</a></span>
            </div>
            <Row>
                    <Col xs={6} >
                        <Toast  onClose={() => setShow(false)} show={show}  delay={3000} autohide>
                        <Toast.Body className="toast_message">{message}</Toast.Body>
                        </Toast>
                    </Col>
                </Row> 
            </form>
        </div>
    )
}

export default Login;
