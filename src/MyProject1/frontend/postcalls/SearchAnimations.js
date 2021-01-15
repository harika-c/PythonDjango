import {animations,fetchApi} from '../redux/actions/Actions';
import {useState,useEffect } from 'react';
import {connect, useDispatch , useSelector} from 'react-redux';
import axios from 'axios';
const SearchAnimations=({state,fetchApis})=>{
    // const dispatch = useDispatch()
    // const state = useSelector(state=>state.flower)
    const [animationname, setanimationval] = useState()
    const [animationdescription,setanimationdescription]=useState()
    const forName=(e)=>{
        setanimationval(e.target.value) 
    }
    const forDescription=(e)=>{
        setanimationdescription(e.target.value)
    }
    const onSubmitValue=(e)=>{
        e.preventDefault();
        // dispatch(animations(animationval))
        // console.log()
        if(animationname.length<3 ){
            const validation_text="Please enter more that 3 letters";
            if(animationname.indexOf(" ")==0){
                const validation_text2="No spaces are accepted at the start of the word";
                document.getElementById('errors').innerHTML=validation_text+validation_text2;
            }else {
            document.getElementById('errors').innerHTML=validation_text;
            }
        }else {
            const aa=[{"name": animationname, "about": animationdescription}]
            axios.post('http://localhost:8001/plants/animation',aa)
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
                <input type="text" name="animations_name" onChange={forName}/>
                <p id="errors" name="e"></p>
                <input type="text" name="animations_description" onChange={forDescription}/>
                <button type="submit">Submit</button>
            </form>
            {console.log('.....',state)}
            {/* {state.state ? state.state.map(a=>(<h5>{a}</h5>)): "undefined"} */}
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
        fetchApis:()=> dispatch(fetchApi("animations"))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (SearchAnimations);