import {animations} from '../redux/actions/Actions';
import {useState} from 'react';
import {useDispatch , useSelector} from 'react-redux';
const SearchAnimations=()=>{
    const dispatch = useDispatch()
    const state = useSelector(state=>state.flower)
    const [animationval, setanimationval] = useState()
    const onChangeValue=(e)=>{
        setanimationval(e.target.value) 
    }

    const onSubmitValue=(e)=>{
        e.preventDefault();
        dispatch(animations(animationval))

    }
    return (
        <div>
            <form  onSubmit={onSubmitValue}>
                <input type="text" name="animations"  onChange={onChangeValue}/>
                <button type="submit">Submit</button>
            </form>
            {state.anim ?state.anim.map(a=>(<h5>{a}</h5>)): state.anim}
        </div>
    )
}

export default SearchAnimations;