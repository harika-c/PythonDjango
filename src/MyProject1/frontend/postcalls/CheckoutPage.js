import { useHistory } from "react-router-dom"
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const CheckoutPage=()=>{
    const atc = useSelector(state => state.cartreducer)
    const history=useHistory()
    useEffect(() => {
        console.log('checkoutpage useeffect',atc,atc.length)
        if(atc.length==0){
            const path='/';
            history.push(path)
        }
        
    }, [])
    function validateform(){
        console.log('inside')
        var x=document.forms["myForm"]["fname"].value;
        if(x==""){
            alert("enter details")
            return false
        }
    }
    return (
        <div>
            <form name="myForm" onsubmit={validateform()}>
                <div>
                    First Name :
                    <input type="text"  name="fname"  placeholder="first name"/>
                    <p class="error"></p>
                </div>
                <div>
                    Last Name :
                    <input type="text" name="lname" placeholder="last name"/>
                    <p class="error"></p>
                </div>
                <div>
                    Mobile Number :
                    <input type="tel" name="mnumber" placeholder="mobile number"/>
                    <p class="error"></p>
                </div>
                <button type="button">Place Order</button>
                
            </form>
        </div>
    )
}
export default CheckoutPage;