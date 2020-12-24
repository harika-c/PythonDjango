import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal.js';

function Checkout() {
    return (
        <div className="checkout"> 
            <div className="checkout__left">
                <img className="checkout__ad"
                    alt=""
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Gaming/July/Gaming-Laptops_V215988835_IN_PC_Bundles_CategoryPage_Banners_1500x300.jpg"
                />
                <div>
                    <h3 className="shopping__cart">Your shopping Basket</h3>
                </div>
            </div>
            <div className="checkout__right">
                {/* HomeWork */}
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
