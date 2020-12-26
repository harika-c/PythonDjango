import { decrement, increment } from "./actions/CounterAction";
import {useSelector, useDispatch} from 'react-redux';

const Data =()=>{

    const count = useSelector(state => state.count)
    const dis = useDispatch();
    return (
        <div>
            <button onClick={()=>dis(increment())}>+</button>
            {count}
            <button onClick={()=>dis(decrement())}>-</button>
        </div>
        
    )
}

export default Data ;