import AwesomeSliders from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const AutoImageSliderForBanners=(props)=>{
    
    return(
        
        <div>
            <div>
                <head>
  
                <link rel="stylesheet" href="/path/to/flickity.css" media="screen"/>
                </head>
                <body>
                
                <script src="/path/to/flickity.pkgd.min.js"></script>
                </body>
                </div>
            {console.log('AutomImagesSliderForBanner....',props.object)}
            
            {
                Object.keys(props.object).length!=0?  
                <AwesomeSliders 
                                
                                >
                    {props.object.map(singleObject=><div data-src={singleObject.url} />
                    )}
                    
                    </AwesomeSliders>
                    :""
            }
        </div>
    )
}
export default AutoImageSliderForBanners;