import {animations,fetchApi} from '../redux/Actions';
import {useState,useEffect } from 'react';
import {connect, useDispatch , useSelector} from 'react-redux';
import axios from 'axios';
const SearchFruitsVegetables=({state,fetchApis})=>{
    // const dispatch = useDispatch()
    // const state = useSelector(state=>state.flower)
    const [fruitsandvegiesname, setfruitsandvegiesname] = useState()
    const [fruitsandvegiesdes,setfruitsandvegiesdes]=useState()
    const forName=(e)=>{
        setfruitsandvegiesname(e.target.value) 
    }
    const forDescription=(e)=>{
        setfruitsandvegiesdes(e.target.value)
    }
    const onSubmitValue=(e)=>{
        e.preventDefault();
        // dispatch(animations(animationval))
        // console.log()
        if(fruitsandvegiesname.length<3 || fruitsandvegiesname.indexOf(" ")==0 ){
            const validation_text="Please enter more that 3 letters";
            if(fruitsandvegiesname.indexOf(" ")==0){
                const validation_text2="No spaces are accepted at the start of the word";
                document.getElementById('errors').innerHTML=validation_text+validation_text2;
            }else {
            document.getElementById('errors').innerHTML=validation_text;
            }
        }else {
            const aa=[{"name": fruitsandvegiesname, "about": fruitsandvegiesdes}]
            axios.post('http://localhost:8001/mywebsite/fruitsandvegies',aa)
            .then(res=>console.log("axios post response ",res))
            .catch(err=> console.log('axios post error',err))
        }
    }
    useEffect(() => {
        fetchApis()
    }, [])
    return (
        <div>
            <form  onSubmit={onSubmitValue}>
                <input type="text" name="fruitsandvegies_name" onChange={forName}/>
                <p id="errors" name="e"></p>
                <input type="text" name="fruitsandvegies_description" onChange={forDescription}/>
                <button type="submit">Submit</button>
            </form>
            {/* {console.log('.....',state.state)} */}
            {state.state !=  undefined ? state.state.data.map(a=>(<h5>{a.name}</h5>)): "undefined"}
        </div>
    )
}
const mapStateToProps=(state)=>{
    console.log('map state to props ', state)
    return {
        state: state.reducer 
    }
}
const mapDispatchToProps=(dispatch)=>{
    console.log('map dispatch to props ')
    return {
        fetchApis:()=> dispatch(fetchApi("fruitsandvegies"))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (SearchFruitsVegetables);