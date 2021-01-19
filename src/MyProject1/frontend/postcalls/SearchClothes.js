import axios from 'axios';
import {useState, useEffect } from 'react';
import {useDispatch , useSelector,connect } from 'react-redux';
import {insects,fetchApi} from '../redux/actions/Actions';


const SearchClothes=({state,fetchApis})=>{
    // const state = useSelector(state => state.flower)
    // const dispatch = useDispatch()
    const [clothesname, setclothesname] = useState()
    const [clothesdescription,setclothesdescription]=useState()
    useEffect(() => {
        fetchApis()
    }, [])
    const onSubmitValue=(e)=>{
        e.preventDefault();
        // dispatch(insects(value1));
        const aa=[{"name": clothesname, "about": clothesdescription}]
        axios.post("http://localhost:8001/mywebsite/clothes",aa)
        .then(res=>console.log('axios post call resp',res))
        .catch(err=>console.log('axios post call err',err))
    }    
    const forName=(e)=>{
        setclothesname(e.target.value)
    }
    const forDescription=(e)=>{
        setclothesdescription(e.target.value)
    }
    return (
        <div>
            <form onSubmit={onSubmitValue}>
                <input type="text" name="clothes_name" onChange={forName}></input>
                <input type="text" name="clothes_descriptin" onChange={forDescription}></input>
                <button type="submit">Submit</button>
                {console.log('in search clothes...',state)}
                {state.state!=undefined ? state.state.data.map(aa=>(<h1>{aa.name}</h1>)): "no data"}
                </form>
            </div>
    )

}
const mapStateToProps=(state)=>{
    console.log("map state to props",state)
    return{
        state: state.reducer
    }
}

const mapDispatchToProps=dispatch=>{
    console.log("map dispatch to props")
    return {
        fetchApis:()=> dispatch(fetchApi("clothes"))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(SearchClothes);