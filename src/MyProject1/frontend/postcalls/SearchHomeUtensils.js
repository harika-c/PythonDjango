import { connect } from "react-redux";
import  {useState,useEffect} from 'react';
import {fetchApi} from '../redux/actions/Actions';

const SearchHomeUtensils=({state,fetchApis})=>{
    const [homeutensilsname, sethomeutensilsname] = useState()
    const [homeutensilsdes, sethomeutensilsdes] = useState()
    useEffect(() => {
        fetchApis()
    }, [])
    const forName=()=>{

    }
    const forDescription=()=>{
        
    }
    const onSubmit=()=>{

    }
    return(
        <div>
            <form>
                <input type="text" onChange={forName} />
                <input type="text" onChange={forDescription} />
                <button type="submit"  onClick={onSubmit} />
                </form>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        state: state.reducer 
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchApis: ()=>dispatch(fetchApi("homeutensils"))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (SearchHomeUtensils);