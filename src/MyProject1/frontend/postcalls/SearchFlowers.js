import {useDispatch , useSelector ,connect} from 'react-redux';
import {useState,useEffect} from 'react';
import { flowers , fetchApi } from '../redux/actions/Actions';
import axios from 'axios';

const SearchFlower =({data,fetchApi})=>{
    // const dispatch = useDispatch();
    // const state=useSelector(state=>state.reducer);
    const [flowervar, setflowervar] = useState("");
    const [flowerdes,setflowerdes]= useState("");
    useEffect(() => {
        console.log('useeffect in searchflower file')
        fetchApi()
       
    }, [])
    

    const forName=(e)=>{
        setflowervar(e.target.value);
    }
    const forDescription=(e)=>{
        setflowerdes(e.target.value);
    }
    const onSubmitValue=(e)=>{
        e.preventDefault();
        console.log(flowervar,flowerdes);
        const aa = [{"name":flowervar, "about": flowerdes}]
        axios.post('http://localhost:8001/plants/flower',aa)
        .then(res=>console.log(res,'axios post call res'))
        .catch(err=>console.log(err,"in axios post call"))
        // store in state management 
        // dispatch(flowers(flowervar));
        // call the post call and send it to the api fetch    
    }

    return (
        <div>
            <form  onSubmit={onSubmitValue}>
                <input type="text " name="flower_name" onChange={forName}></input>
                <input type="text" name="flower_description" onChange={forDescription}></input>
                <button type="submit" > Submit </button>  
            </form>
            {data.state !=undefined ? data.state.data.map(a=>(<h4>{a.name}</h4>)):"undefined it is "}
            {/* {data.state !=undefined ? data.state.data[0].flower.map(a=>(<h5>{a.name}</h5>)) : ""} */}
            
        </div>
    )
}

const mapStateToProps =state=>{
    console.log("mapstatetoprops ....",state)
    return {
        data: state.reducer
    }
}
const  mapDispatchToProps =dispatch=>{
    console.log('map dispatch to props')
    return {
        fetchApi:()=> dispatch(fetchApi("flower"))
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (SearchFlower);