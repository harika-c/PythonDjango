import React from 'react';
import {Link} from "react-router-dom";

import {Dropdown} from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import {useSelector} from 'react-redux';

import "./Nav.css";
import Logout from './login/Logout';
import MyProfile from './login/MyProfile';
import ChangePassword from './login/ChangePassword';
import SavedAddress from './login/SavedAddress';
import Favourites from './login/Favourites';

export const Nav=()=>{
    const atc = useSelector(state => state.cartreducer)
    const loggedin_reducer = useSelector(state => state.loggedin_reducer)
    const username = loggedin_reducer.state.firstname;
    const myaccount_urls=[{ name: "My Profile", url: "/myprofile"},
                        {name: "Saved Address" , url: "/savedaddress"},
                        {name: "Change Password" , url : "/changepassword"}
    ]
    const navigation_urls=[{name: "Home" , url : "/"},
                            {name: "Clothes"   ,url : "/clothes"},
                            {name: "Electronics"   ,url : "/electronics"},
                            {name: "Groceries"   ,url : "/groceries"},
                            {name: "Fruits & Vegies"   ,url : "/fruitsandvegs"},
                            {name: "Home Utencils"   ,url : "/homeutencils"}
                            ]
    return (
        <div>
            {console.log('......naav bar ...',atc)}
            {console.log('.....',loggedin_reducer)}
            <div className="nav__bar">
               <nav class="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                    {navigation_urls.map(data=>
                        <Link to={data.url} className="link">
                            <span className="category">
                                {data.name}
                            </span>
                        </Link>)}
                    
                    
                    <Link to="/cart" className="link">
                        <span className="cart_icon">
                            
                            <span className="cart_count">
                                <ShoppingCartIcon/>
                                {atc.length}
                            </span>
                        </span>
                    </Link>

                     {loggedin_reducer.isLoggedIn ? 
                     <React.Fragment>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="login_or_signup">
                                <PersonIcon/> 
                                <span>
                                    Hello {username} 
                                </span>
                            </Dropdown.Toggle>
                        
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    {myaccount_urls.map(data=><Link to={data.url} >
                                        <div>
                                            {data.name}
                                        </div>
                                    </Link> )}
                                </Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                    </React.Fragment>
                     : 
                        <React.Fragment>
                            <Link to="/login" className="link">
                                <span className="login_or_signup">
                                    Login
                                </span>
                            </Link>
                            <Link to="/signup" className="link">
                                <span className="login_or_signup">
                                    Signup
                                </span>
                            </Link> 
                        </React.Fragment>
                        }
                    
                </nav>
            </div>
        </div>
    )
}
export default Nav;