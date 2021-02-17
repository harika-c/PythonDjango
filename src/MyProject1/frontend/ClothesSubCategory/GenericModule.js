import {useEffect} from 'react';
import {fetchData, addToCartAction,fetchNone} from '../redux/Actions';
import {useDispatch, useSelector} from 'react-redux';
import './WomensWear.css';


const GenericModule=(props)=>{
   
    const dispatch = useDispatch()
    const state = useSelector(state => state.reducer)
    const atc=useSelector(state=>state.cartreducer)

    useEffect(() => {
        console.log('womens wear useeffect')
        dispatch(fetchData(props.apiname));
        return()=>{
            console.log("womens wear unmount")
            dispatch(fetchNone());
        }
    }, [])
    const addToCartMethod=(data)=>{
        console.log("add to cart method to push an anction ",data )
        
        dispatch(addToCartAction(data))
        // console.log('....////............',!localStorage.getItem('ccart'))
         
        
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
                ): ""}
                {console.log('woemns wear... nav............',state)}
        </div>
    )
}

export default GenericModule;