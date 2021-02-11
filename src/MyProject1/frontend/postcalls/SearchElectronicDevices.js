import {useDispatch , useSelector ,connect} from 'react-redux';
import {useState,useEffect} from 'react';
import { flowers , fetchApi } from '../redux/Actions';
import axios from 'axios';

const SearchElectronicDevices =({data,fetchApi})=>{
    // const dispatch = useDispatch();
    // const state=useSelector(state=>state.reducer);
    const [electronicdevicesvar, setelectronicdevicesvar] = useState("");
    const [electronicdevicesdes,setelectronicdevicesdes]= useState("");
    useEffect(() => {
        console.log('useeffect in searchflower file')
        fetchApi()
       
    }, [])
    

    const forName=(e)=>{
        setelectronicdevicesvar(e.target.value);
    }
    const forDescription=(e)=>{
        setelectronicdevicesdes(e.target.value);
    }
    const onSubmitValue=(e)=>{
        e.preventDefault();
        console.log(electronicdevicesvar,electronicdevicesdes);
        const aa = [{"name":electronicdevicesvar, "about": electronicdevicesdes}]
        axios.post('http://localhost:8001/mywebsite/electronicdevices',aa)
        .then(res=>console.log(res,'axios post call res'))
        .catch(err=>console.log(err,"in axios post call"))
        // store in state management 
        // dispatch(flowers(flowervar));
        // call the post call and send it to the api fetch    
    }

    return (
        <div>
            <form  onSubmit={onSubmitValue}>
                <input type="text " name="electronicdevices_name" onChange={forName}></input>
                <input type="text" name="electronicdevices_description" onChange={forDescription}></input>
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
        fetchApi:()=> dispatch(fetchApi("electronicdevices"))
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (SearchElectronicDevices);