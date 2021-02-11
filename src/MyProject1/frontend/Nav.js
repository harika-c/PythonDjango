import "./Nav.css";
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useSelector} from 'react-redux';

export const Nav=()=>{
    const atc = useSelector(state => state.cartreducer)
    return (
        <div>
            {console.log('......naav bar ...',atc)}
            <div className="nav__bar">
               <nav class="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                    <Link to="/" className="link">
                        <span className="category">
                            Home
                        </span>
                    </Link>
                    
                    <Link to="/clothes" className="link">
                        <span className="category">
                            Clothes
                        </span>
                    </Link>
                
                    <Link to="/electronics" className="link">
                        <span className="category">
                            Electronics
                        </span>
                    </Link>
                    
                    <Link to="/groceries" className="link">
                        <span className="category"> 
                            Groceries
                        </span>
                    </Link>
                    
                    <Link to ="/fruitsandvegs" className="link">
                        <span className="category">
                            Fruits & Vegies
                        </span> 
                    </Link>

                    <Link to="/homeutencils" className="link">
                        <span className="category">
                            Home Utencils
                        </span>
                    </Link>
                    
                    <Link to="/cart" className="link">
                        <span className="cart_icon">
                            
                            <span className="cart_count">
                                <ShoppingCartIcon/>
                                {atc.length}
                            </span>
                        </span>
                    </Link>
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
                </nav>
            </div>
        </div>
    )
}
export default Nav;