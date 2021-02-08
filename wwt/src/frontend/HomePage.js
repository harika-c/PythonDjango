import './HomePage.css';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import {useEffect,useState} from 'react';
import { BACKENDSERVER } from '../config';
import { BrowserRouter as Router ,Route, Switch,Link,useHistory} from 'react-router-dom';
import Edit from './Edit';
import {apiFilter} from '../redux/Actions';
import {useDispatch,useSelector} from 'react-redux';

const HomePage=()=>{
    const dispatch = useDispatch()
    const state = useSelector(state => state.reducer)
    const [q, setq] = useState("")
    var [val,setval]=useState([])
    useEffect(() => {
        console.log('use effect')
        
        // dispatch(apiFilter())
        axios.get(BACKENDSERVER+"/contact_data")
        .then(res=>setval(res.data))
        .catch(err=>console.log(err))
        
    }, [])
    
    const onDelete=(_id)=>{
        const prevData=val;
        console.log(_id,'....id to be deleted ...',prevData)

        setval(prevData.filter(c=>c._id !==_id ))

        axios.delete(BACKENDSERVER+"/contact_data/"+_id)
        .then(res=>console.log('axios get',res.data))
        .catch(err=>console.log(err))
    }
    const history=useHistory();
    const onEdit =(data)=>{
        console.log(data,'///')
        let path=`/kl`
            history.push(path)
        
        axios.put(BACKENDSERVER+"/contact_data")
        .then(res=>console.log('axios get',res.data))
        .catch(err=>console.log(err))
    }
    const funct1=(e)=>{
        
        const v=e.target.value;
        console.log('..val.',v)
       if(v!=""){
        // if(state.state!=undefined){ 
        //     state.state.map(a=>{
        //     console.log('....///defined//.........',a)
        //     if(((a.name !=undefined? a.name: "").includes(val))){
        //         ||((a.role).includes(val))||(a.phones==val)||(a.email==val)||(a.address==val)
        //         console.log('...prevstate...',a)
        //         setval(prevState=>({...prevState,data:a}))
        //         }
        //     })} else{console.log("undefined data")}
        console.log(val,';;;;;;;;;;;;;')
        const recover=val;
         setval(val.filter(name=>{
             console.log(name.name.indexOf(v))
            return   name.name.indexOf(v) >=0 
            // console.log((state.state).toLowerCase(v))
        }))
    }else{
        // setData([])
    }
    }
    return(
        
        <div class="input-group">
            {console.log('....homepage....')}
            {console.log('...........complete data val......',val)}
            
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" onChange={e=>funct1(e)} />
            <SearchIcon type="button" class="btn btn-outline-primary">Search</SearchIcon>
            
            {val!=undefined? val.map(d=>
            
                    <div class="card text-white bg-info mb-3" style={{"width": "18rem"}}>
                                
                        <div class="card-body">
                            <h5 class="card-title">Role : {d.role}</h5>
                            <h6 class="card-subtitle mb-1 text-muted">Name : {d.name}</h6>
                            <p class="card-text" style={{fontSize:"14px"}} >email : {d.email}<br/>
                                                phones : {d.phones}<br/>
                                                address : {d.address}</p>
                                                
                            <button onClick={()=>onDelete(d._id)} class="card-link">Delete</button>
                            
                            <button onClick={()=>onEdit()} class="card-link">Edit</button>
                        </div>
                    </div>
            ):"no data"}
        </div>
        
    )
}


export default HomePage;