import {useState} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {insects} from '../redux/actions/Actions';

const SearchInsects=()=>{
    const state = useSelector(state => state.flower)
    const dispatch = useDispatch()
    const [value1, setvalue1] = useState()
    
    const onSubmitValue=(e)=>{
        e.preventDefault();
        dispatch(insects(value1));
    }
    
    const onChangeValue=(e)=>{
        setvalue1(e.target.value)
    }      
    
    return (
        <div>
            <form onSubmit={onSubmitValue}>
                <input type="text" name="insects" onChange={onChangeValue}></input>
                <button type="submit">Submit</button>
                {state.inse!=undefined ? state.inse.map(aa=>(<h1>{aa}</h1>)): state.inse=[]}
                </form>
            </div>
    )

}

export default SearchInsects;