import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchData,addToCartAction,fetchNone} from '../redux/Actions';
import './WomensWear.css';

const MensWear=()=>{
    const dispatch = useDispatch()
    const reducer = useSelector(state => state.reducer)
    const atc = useSelector(state => state.cartreducer)
    useEffect(() => {
        console.log('meanswear component useeffect')
        dispatch(fetchData("menswear"))
        return()=>{
            console.log("womens wear unmount")
            dispatch(fetchNone());
        }
    }, [])
    const addToCartMethod=(val)=>{
        dispatch(addToCartAction(val))
    }
    return (
        <React.Fragment>
            {console.log(reducer)}
            <div>
                {reducer.state!=""? reducer.state.map(data=>
                    <div class="row"> 
                        <div class="column" >
                            <img src={data.url}  alt="clothes_images"  height="200px" width="200px"></img>
                            <h4 className="title">{data.name}</h4>
                            <p>{data.about}</p>
                            <p> Rs {data.price} /-</p>
                            <button type="button" class="button" onClick={()=>addToCartMethod(data)}>Add to Cart</button>
                        </div>
                    </div>
                ):""}
                </div>
        </React.Fragment>
    )
}
export default MensWear;