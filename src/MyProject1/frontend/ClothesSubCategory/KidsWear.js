import { addToCartAction, fetchData ,fetchNone} from "../redux/Actions"
import {useDispatch,useSelector} from 'react-redux';
import {useEffect} from 'react';
import './WomensWear.css';

const KidsWear=()=>{
    const dispatch = useDispatch()
    const atc = useSelector(state => state.cartreducer)
    const reducer = useSelector(state => state.reducer)
    useEffect(() => {
        dispatch(fetchData("kidswear"))
        return()=>{
            console.log("womens wear unmount")
            dispatch(fetchNone());
        }
    }, [])
    const addToCartMethod=(val)=>{
        dispatch(addToCartAction(val))
    }
    return(
        <div>
            {console.log("kidswear return ",reducer)}
            {reducer.state!=""?reducer.state.map(data=>
            <div class="row"> 
                <div class="column" >
                    <img src={data.url} height="200px" width="200px" />
                    <h4 className="title">{data.name}</h4>
                    <p>{data.about}</p>
                    <p> Rs {data.price} /-</p>
                    <button type="button" class="button" onClick={()=>addToCartMethod(data)}>Add to Cart</button>
                </div>
            </div>):""}
        </div>
    )
}

export default KidsWear;