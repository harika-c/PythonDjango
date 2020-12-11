import React from 'react'
import { useAuth0, UseAuth0 } from '@auth0/auth0-react';
import { Link} from 'react-router-dom';
import './LoginButton.css';
function LoginButton() {
    
    return (
        <Link to="/userpage">
            <div className="login__page">
                <button>Log In</button> 
            </div>
        </Link>
    )
}

export default LoginButton
