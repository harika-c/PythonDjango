import {useDispatch ,useSelector} from 'react-redux';
import {useState} from 'react';
import {grass} from '../redux/actions/Actions'

const SearchGrass=()=>{
    const dispatch = useDispatch();
    const state = useSelector(state => state.flower)
    const [grassvalue, setgrassvalue] = useState()
    const onSubmitValue=(e)=>{
        e.preventDefault();
        dispatch(grass(grassvalue))
    }
    const onChangeValue=(e)=>{
        console.log(e.target.value)
        setgrassvalue(e.target.value)
    }
    return (
        <div>
            <form onSubmit={onSubmitValue}>
                <input type ="text" name="grass" onChange={onChangeValue}></input>
                <button type="submit"> Submit</button>
            </form>
            {state.gras !=undefined ?state.gras.map(g=>(<h3>{g}</h3>)): state.gras=[]}
        </div>
    )
}

export default SearchGrass;