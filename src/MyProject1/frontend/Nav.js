import "./Nav.css";
import {Link} from "react-router-dom";


const Nav=()=>{
    return (
        <div>
            <div className="nav__bar">
               <nav class="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                    <Link to="/" className="link">
                        <span>
                            Home
                        </span>
                    </Link>
                    
                    <Link to="/clothes" className="link">
                        <span>
                            Clothes
                        </span>
                    </Link>
                
                    <Link to="/electronics" className="link">
                        <span>
                            Electronics
                        </span>
                    </Link>
                    
                    <Link to="/groceries" className="link">
                        <span> 
                            Groceries
                        </span>
                    </Link>
                    
                    <Link to ="/fruitsandvegs" className="link">
                        <span>
                            Fruits & Vegies
                        </span> 
                    </Link>

                    <Link to="/homeutencils" className="link">
                        <span>
                            Home Utencils
                        </span>
                    </Link>
                </nav>
            </div>
        </div>
    )
}
export default Nav;