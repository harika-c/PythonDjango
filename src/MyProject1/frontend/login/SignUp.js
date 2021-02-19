import axios from 'axios';

import {useState} from 'react';
import {Col,Row} from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import {toast} from 'react-toastify';
import {  SIGNUP_URL } from '../../Config';
import {useHistory} from 'react-router-dom';
import { login } from '../redux/Actions';
import {useDispatch} from 'react-redux';



const SignUp =()=>{
    const [val, setval] = useState({})
    var [message, setMessage] = useState({})
    const [show, setShow] = useState(false);

    const history=useHistory();
    const dispatch = useDispatch();

    const submitFunct=(e)=>{
        e.preventDefault()
        console.log('subfunc..',val)
        axios.post(SIGNUP_URL,val)
        .then(res=> {
            console.log('axios ,,,,,res..',res.data,typeof(res.data)=="string")
            if(typeof(res.data)=="string"){
                setMessage({user_exists:res.data})
                setShow(true)
            }
            else{
                
                e.target.reset();
                history.push("/");
                dispatch(login(res.data));
            }

    })
        .catch(err=>console.log(err))
    }
    
    const change=(e)=>{
        console.log(e.target.name)
        setval({...val,[e.target.name]:e.target.value})
    }
    
    return (
        <div>
            <h4>
                Sign Up
            </h4>
            <form onSubmit={e=>submitFunct(e)}>
                <div class="container">
                    <label for="fname"><b>First Name</b></label><br/>
                    <input type="text" placeholder="Firstname"  onInput={(e)=>change(e)} name="firstname" required /><br/>

                    <label for="lname"><b>Last Name</b></label><br/>
                    <input type="text" placeholder="Lastname" onChange={e=>change(e)} name="lastname" required /><br/>

                    <label for="psw"><b>Mobile Number</b></label><br/>
                    <input type="text" placeholder="Mobile number" onInput={(e)=>change(e)} name="mobilenumber" required /><br/>

                    <label for="psw"><b>Email Id</b></label><br/>
                    <input type="text" placeholder="Email Id" onInput={(e)=>change(e)} name="emailid" required /><br/>

                    <label for="psw"><b>Create Password</b></label><br/>
                    <input type="password" placeholder="Password" onInput={(e)=>change(e)} name="password" required /><br/>
                    
                    <label for="psw"><b>Confirm Password</b></label><br/>
                    <input type="password" placeholder="Confirm password" onInput={(e)=>change(e)} name="confirmpassword" required /><br/>
                        
                    <button type="submit" className="submit_buttons">Sign Up</button> <br/>
                    
                </div>
                </form>
                 <Row>
                    <Col xs={6} >
                        <Toast  onClose={() => setShow(false)} show={show}  delay={3000} autohide>
                        <Toast.Body className="toast_message">{message.user_exists}</Toast.Body>
                        </Toast>
                    </Col>
                </Row> 
                
                
            </div>
    )
}
export default SignUp;