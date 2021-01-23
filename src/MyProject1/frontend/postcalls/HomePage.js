import {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchApi} from '../redux/actions/Actions';
import './HomePage.css';

const HomePage =({state,fetchApis})=>{
    useEffect(() => {
        fetchApis()
    }, [])
    let i=-1;
    return (
        
        <div> 
            {console.log('home pahe state',state.state)}  
            <div className="ecommerce_banner">
                
            </div>
            <div className="category_banners">
                
                {
                state.state!=undefined ?state.state.map(urls=>{
                    i=i+1;
                    if(i==0 || i==state.state.length-1){
                        return  <img src={urls.url} className="HomePage" alt="Category_img" width="1000" height="400"/>
                    }
                    return <img src={urls.url} className="Category" alt="Category_img" width="500" height="300"/>
                }): "no image data"
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