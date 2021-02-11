import {useDispatch ,useSelector} from 'react-redux';
import {useState , useEffect} from 'react';
import {fetchApi} from '../redux/Actions'
import {connect} from  'react-redux';
import axios from 'axios';

const SearchGroceries=({state,fetchApis})=>{
    const [groceriesname, setgroceriesname] = useState();
    const [groceriesdes,setgroceriesdes]=useState();

    useEffect(() => {
        fetchApis();
    }, [])
    const onSubmitValue=(e)=>{
        e.preventDefault();
        const aa=[{"name" : groceriesname, "about" : groceriesdes}]
        axios.post('http://localhost:8001/mywebsite/groceries',aa)
        .then(res=>console.log(res,'axios post '))
        .catch(err=>console.log(err))
    }
    const forName=(e)=>{
        setgroceriesname(e.target.value);
    }
    const forDescription=(e)=>{
        setgroceriesdes(e.target.value);
    }
    return (
        <div>
            <form onSubmit={onSubmitValue}>
                <input type ="text" name="groceries_name" onChange={forName}></input>
                <input type="text" name="groceries_description" onChange={forDescription}></input>
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

export default connect (mapStateToProps,mapDispatchToProps) (SearchGroceries);