import {useEffect} from 'react';
import {fetchData, addToCartAction} from '../redux/actions/Actions';
import {useDispatch, useSelector} from 'react-redux';
import './WomensWear.css';


const WomensWear=()=>{
   
    const dispatch = useDispatch()
    const state = useSelector(state => state.reducer)
    
    useEffect(() => {
        console.log('womens wear useeffect')
        dispatch(fetchData("womenswear"));
    }, [])
    const addToCartMethod=(data)=>{
        var count=1
        console.log("add to cart method to push an anction ")
        
        dispatch(addToCartAction(data,count))
        
    }   
    
    return (
        <div>
            {console.log('womens wear return ',state)}
            {state.state!=undefined? 
                state.state.map(
                    data=><div class="row"> 
                                <div class="column" >
                                    <img src={data.url}  alt="clothes_images"  height="200px" width="200px"></img>
                                    <h4 className="title">{data.name}</h4>
                                    <p>{data.about}</p>
                                    <p> Rs {data.price} /-</p>
                                    <button type="button" class="button" onClick={()=>addToCartMethod(data)}>Add to Cart</button>
                                    
                                </div>
                            </div>
                ): "no data"}
                {console.log('woemns wear... nav............',state)}
        </div>
    )
}

export default WomensWear;