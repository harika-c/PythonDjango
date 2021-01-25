import {useSelector} from 'react-redux';
import {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';

import './CartPage.css';

const CartPage=()=>{
    const atc = useSelector(state => state.cartreducer)
    const [total, settotal] = useState(0)
    const history=useHistory();
    var priceval=0;
    
    const proceedToPay=()=>{
        if(total==0){
            var storep=document.getElementById('empty_cart_text')
            var empty=document.createTextNode('Your Cart is Empty')
            
            storep.appendChild(empty);
        }
        else{
            let path=`/checkout`
            history.push(path)
        }
    }
    useEffect(()=>{
        
        for(let initial=0;initial<atc.length;initial++){
            priceval=priceval+parseInt(atc[initial].price)
        }
        console.log(atc,'........settotal...... ');
        settotal(priceval);
        console.log(atc,'.....inuseEffect cart page ',priceval,total);
        if(priceval==0){
            document.getElementById('proceedtopay_button').disabled=true
        }
    },[])
    return (
        <div className="cart_container">
            {console.log('cart page ',atc)}
            <div className="cart_sub_container">
                <div className="Header">Your Basket: </div>
                {atc.map(arrange=>(
                    <div className="cart_items_images" >
                        <div className="imh">
                        <img src={arrange.url} className="aa" height="100" width="100"/>
                        </div>
                        <p className="cart_items_names">
                            {arrange.name}
                        </p>
                        <h4 className="cart_items_prices">
                            Rs {arrange.price}   
                        </h4>
                    </div>))}
                
             </div>
            <div className="cart_subtotal">

            </div>
            <div className="proceedtopay">

                Total : {total}
                <button  id="proceedtopay_button" onClick={()=>proceedToPay()}>Proceed to pay</button>
                <p id="empty_cart_text"></p>
            </div>
        </div>
    )
}

export default CartPage;