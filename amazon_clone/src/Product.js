import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({title,id ,price, descrip, rating,imgname}) {

    const [{basket},dispatch ]= useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price:price,
                rating:rating,
                imgname:imgname
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>🌟</p>
                    ))}
                </div>
            </div>
            <img className="product__image"
                src={imgname} 
                alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
        
    )
}

export default Product
