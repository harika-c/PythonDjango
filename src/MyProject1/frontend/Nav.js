import "./Nav.css";
import {Link} from "react-router-dom";
import Animations from './Animations';

const Nav=()=>{
    return (
        <div>
            <div className="nav__bar">
                
                <Link to="/">
                    <span>
                        Home
                    </span>
                </Link>
                
                <Link to="/animations">
                    <span>
                    Animations
                    </span>
                </Link>
            
                <Link to="/flowers">
                    <span>
                    Flowers
                    </span>
                </Link>
                
                <Link to="/grass">
                    <span> 
                    Grass
                    </span>
                </Link>
                
                <Link to ="/insects">
                    <span>
                    Insects
                    </span> 
                </Link>
               
            </div>
        </div>
    )
}
export default Nav;