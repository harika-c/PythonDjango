import {useDispatch ,useSelector} from 'react-redux';
import {useState , useEffect} from 'react';
import {fetchApi} from '../redux/actions/Actions'
import {connect} from  'react-redux';
import axios from 'axios';

const SearchGrass=({state,fetchApis})=>{
    const [grassvalue, setgrassvalue] = useState();
    const [grassdescrip,setgrassdescrip]=useState();

    useEffect(() => {
        fetchApis();
    }, [])
    const onSubmitValue=(e)=>{
        e.preventDefault();
        const aa=[{"name" : grassvalue, "about" : grassdescrip}]
        axios.post('http://localhost:8001/plants/grass',aa)
        .then(res=>console.log(res,'axios post '))
        .catch(err=>console.log(err))
    }
    const forName=(e)=>{
        setgrassvalue(e.target.value);
    }
    const forDescription=(e)=>{
        setgrassdescrip(e.target.value);
    }
    return (
        <div>
            <form onSubmit={onSubmitValue}>
                <input type ="text" name="grass_name" onChange={forName}></input>
                <input type="text" name="grass_description" onChange={forDescription}></input>
                <button type="submit"> Submit</button>
            </form>
            {console.log('search grass...',state.state)}
            {state.state !=undefined ? state.state.data.map(g=>(<h4>{g.name}</h4>)):"no data present for grass"}
        </div>
    )
}
const mapStateToProps=state=>{
    console.log('map state to props',state.reducer)
    return  {
        state: state.reducer
    }
}
const mapDispatchToProps=dispatch=>{
    console.log('map dispatch to props grass ')
    return {
       fetchApis:()=> dispatch(fetchApi("grass"))
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (SearchGrass);