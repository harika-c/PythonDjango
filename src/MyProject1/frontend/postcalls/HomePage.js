import {useEffect} from 'react';
import {connect,useDispatch} from 'react-redux';
import {fetchApi,fetchNone} from '../redux/Actions';
import './HomePage.css';

const HomePage =({state,fetchApis})=>{
    const dispatch = useDispatch();
    useEffect(() => {
        fetchApis()
        return()=>{
            console.log("Homepage Unmount")
            dispatch(fetchNone());
        }
    }, [])
    let i=-1;
    return (
        
        <div> 
            {console.log('home pahe state',state.state)}  
            <div className="ecommerce_banner">
                
            </div>
            <div className="category_banners">
                
                {
                state.state!=undefined ? state.state.map(urls=>{
                    i=i+1;
                    if(i==0 || i==state.state.length-1){
                        return  <img src={urls.url} className="HomePage" alt="Category_img" width="1000" height="400"/>
                    }
                    return <img src={urls.url} className="Category" alt="Category_img" width="500" height="300"/>
                }): ""
                }
                {/* {state.state} */}
                
            </div>
          
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        state: state.reducer
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        fetchApis: ()=>dispatch(fetchApi("banners"))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);