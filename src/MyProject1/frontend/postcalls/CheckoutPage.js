import { useHistory } from "react-router-dom"
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import './CheckoutPage.css';

const CheckoutPage=()=>{
    const {register,handleSubmit,errors} =useForm();
    const atc = useSelector(state => state.cartreducer)
    const history=useHistory()
    useEffect(() => {
        console.log('checkoutpage useeffect',atc,atc.length)
        if(atc.length==0){
            const path='/';
            history.push(path)
        }
        
    }, [])
    const  onSubmit=data=>{
        console.log('inside',data)
        
    }
    return (
        <div>
            <form name="myForm" onSubmit={handleSubmit(onSubmit)} >
                <div className="first_name">
                    First Name :
                    <input type="text"  name="fname"  placeholder="first name" ref={register({required: "user name required",minLength:{value:8, message: "Too Short"}})}/>
                    {errors.fname && <div class="errors">{errors.fname.message}</div>}
                </div>
                <div>
                    Last Name :
                    <input type="text" name="lname" placeholder="last name" ref={register}/>
                    <p class="error"></p>
                </div>
                <div>
                    Mobile Number :
                    <input type="tel" name="mnumber" placeholder="mobile number" ref={register}/>
                    <p class="error"></p>
                </div>
                <button type="submit">Place Order</button>
                
            </form>
        </div>
    )
}
export default CheckoutPage;