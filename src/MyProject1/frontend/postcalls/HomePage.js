import {useEffect} from 'react';
import {connect,useDispatch} from 'react-redux';
import {fetchApi,fetchNone} from '../redux/Actions';
import AutoImageSliderForBanners from './AutoImageSliderForBanners';
import './HomePage.css';

const HomePage =({state,fetchApis})=>{
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('home page useeffect')
        fetchApis()
        return()=>{
            console.log("Homepage Unmount")
            dispatch(fetchNone());
        }
    }, [])
    var storedArr=[]
    var trueBanners=[]
    if(state.state!=undefined){
        if(state.state[state.state.length-1]==true){
            trueBanners.push(state.state[state.state.length-1]);
            storedArr.unshift(state.state[state.state.length-1]);
        }else{
            storedArr.push(state.state[state.state.length-1]);
        }; 
    
        state.state.reduce((accumulator,initialValue)=>{
            if(accumulator.auto_scroll==true){
                trueBanners.unshift(accumulator);
                storedArr.unshift(accumulator);
            }if(initialValue.auto_scroll==false){
                storedArr.push(initialValue);
            }
            return initialValue;
        });
    }
    return (
        
        <div> 
            {console.log('home pahe state',state.state)}  
            <div className="ecommerce_banner">
                
            </div>
            <div className="category_banners">
                {console.log('......finalarray.....',trueBanners)}
                <AutoImageSliderForBanners object={trueBanners}/>     
                {
                    Object.keys(storedArr).length!=0 ? storedArr.map(singleObject=>{
                        
                        if(singleObject.auto_scroll==false){
                            return <img src={singleObject.url} className="HomePage" keys={singleObject.uniqueId}  alt="Category_img" width="1000" height="400"></img> 
                        }
                          }): "No data"
                }
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