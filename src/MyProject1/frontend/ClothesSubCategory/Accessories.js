import {useDispatch,useSelector} from 'react-redux';
import {useEffect} from 'react';
import { fetchData ,fetchNone} from '../redux/Actions';
import './WomensWear.css';

const Accessories =()=>{
    const dispatch = useDispatch()
    const reducer = useSelector(state => state.reducer)
    const atc = useSelector(state => state.cartreducer)
    useEffect(() => {
        console.log('accessories useeffect....')
        dispatch(fetchData("accessories"))
        return()=>{
            console.log("womens wear unmount")
            dispatch(fetchNone());
        }
    }, [])
    const addToCartMethod=(val)=>{

    }
    return(
        <div>
            {console.log('accessories..return ...',reducer)}
            {reducer.state!=""?reducer.state.map(data=>
                <div className="row">
                    <div className="column">
                    <img src={data.url} height="200px" width="200px" />
                    <h4 className="title">{data.name}</h4>
                    <p>{data.about}</p>
                    <p> Rs {data.price} /-</p>
                    <button type="button" class="button" onClick={()=>addToCartMethod(data)}>Add to Cart</button>
                 </div>
                </div>
            ):""}
        </div>
    )
}
export default Accessories;