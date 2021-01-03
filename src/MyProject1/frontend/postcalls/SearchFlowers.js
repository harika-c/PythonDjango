import {useDispatch , useSelector } from 'react-redux';
import {useState,useEffect} from 'react';
import { flowers } from '../redux/actions/Actions';

const SearchFlower =()=>{
    const dispatch = useDispatch();
    const state=useSelector(state=>state.flower);
    const [flowervar, setflowervar] = useState([]);

    useEffect(() => {
        console.log('starts',flowervar)
        fetch('http://localhost:8001/plants')
        .then(res=>res.json())
        .then(data=>{
            console.log('data.////',data)
            setflowervar(data)
            dispatch(flowers(data))
            
        })
        .catch(e=> {
            console.log('error ',e)
        })
       
    }, [])
    const onChangeValue=(e)=>{
        console.log("...",e.target.value)
        setflowervar(e.target.value)
        // store the value in state 
    }
    const onSubmitValue=(e)=>{
        e.preventDefault();
        // store in state management 
        console.log('submit,,,',flowervar)
        dispatch(flowers(flowervar));
        // call the post call and send it to the api fetch 
        
    }
    
    return (
        
        <div>
            {/* {flowervar.map(aa=>(<div>{aa.name}</div>))} */}
            {console.log("....>>>",flowervar)}
            <form onSubmit={onSubmitValue}>
                <input type="text " name="flower" onChange={onChangeValue}></input>
                <button type="submit" > Submit </button>  
            </form>
            {console.log('in search flower...',state.state)}
            {state.state !=undefined ? state.state.map(a=>(<h5>{a.name}</h5>)) : ""}
            {/* {state.state.map(a=>(<h5>{a.name}</h5>))} */}
        </div>
    )
}

export default SearchFlower;