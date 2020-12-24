import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
function Header() {
    const [{ basket},dispatch ]=useStateValue();
    return (
        <nav className="header">
            {/* logo on the left */}
            <Link to="/">
                <img 
                    className="header__logo" 
                    src="https://calvinshields.com/wp-content/uploads/2019/04/amazon_PNG11.png"
                    alt=""
                    />
            </Link>

            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            
            {/* 3 links  */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Goofy</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns &</span>
                        <span className="header__optionLineTwo">Orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/* basket material UI */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {console.log('mmmm',useStateValue())}
                            {basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav>
    )
}

export default Header
