import axios from 'axios';
import {useState, useEffect } from 'react';
import {useDispatch , useSelector,connect } from 'react-redux';
import {insects,fetchApi} from '../redux/actions/Actions';


const SearchInsects=({state,fetchApis})=>{
    // const state = useSelector(state => state.flower)
    // const dispatch = useDispatch()
    const [insectname, setinsectname] = useState()
    const [insectdescription,setinsectdescription]=useState()
    useEffect(() => {
        fetchApis()
    }, [])
    const onSubmitValue=(e)=>{
        e.preventDefault();
        // dispatch(insects(value1));
        const aa=[{"name": insectname, "about": insectdescription}]
        axios.post("http://localhost:8001/plants/insect",aa)
        .then(res=>console.log('axios post call resp',res))
        .catch(err=>console.log('axios post call err',err))
    }    
    const forName=(e)=>{
        setinsectname(e.target.value)
    }
    const forDescription=(e)=>{
        setinsectdescription(e.target.value)
    }
    return (
        <div>
            <form onSubmit={onSubmitValue}>
                <input type="text" name="insects_name" onChange={forName}></input>
                <input type="text" name="insects_descriptin" onChange={forDescription}></input>
                <button type="submit">Submit</button>
                {console.log('in search insects...',state)}
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
        fetchApis:()=> dispatch(fetchApi("insect"))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(SearchInsects);