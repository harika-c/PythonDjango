import { useHistory } from "react-router-dom"
import {useDispatch} from 'react-redux';
import {logout} from '../redux/Actions';

const Logout=(props)=>{
    const dispatch = useDispatch()
    const history =useHistory();

    const onClick=()=>{
        console.log('click on logout option',props.onClick)
        dispatch(logout());
        history.push('/');

    }
    return (
        <div>
            <button onClick={onClick}>logout</button>
        </div>
    )
}

export default Logout ;