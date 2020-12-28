import {useDispatch , useSelector } from 'react-redux';
import {useState} from 'react';
import { flowers } from '../redux/actions/Actions';

const SearchFlower =()=>{
    const dispatch = useDispatch();
    const state=useSelector(state=>state.flower);
    const [flowervar, setflowervar] = useState();

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
            <form onSubmit={onSubmitValue}>
                <input type="text " name="flower" onChange={onChangeValue}></input>
                <button type="submit" > Submit </button>
                {state.flow !=undefined ? state.flow.map(a=>(<h5>{a}</h5>)) : state.flow=[]}
            </form>
        </div>
    )
}

export default SearchFlower;