import AwesomeSliders from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const AutoImageSliderForBanners=(props)=>{
    
    return(
        <div>
            {console.log('AutomImagesSliderForBanner....',props.object)}
            
            {
                Object.keys(props.object).length!=0?  
                <AwesomeSliders>
                    {props.object.map(singleObject=>
                        <div data-src={singleObject.url} height="300" width="800"/>
                    )}
                    
                    </AwesomeSliders>
                    :""
            }
        </div>
    )
}
export default AutoImageSliderForBanners;