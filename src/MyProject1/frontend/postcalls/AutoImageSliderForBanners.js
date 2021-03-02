import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './AutoImageSliderForBanners.css'
import './HomePage.css';

const AutoImageSliderForBanners=(props)=>{
    let settings={
        dot:true,
        // inifite: true,
        speed: 100,
        slideToShow:3,
        slidesToScroll:1,
        cssEase: "linear",
        autoplay: true
        
    }
    return(
        <Slider {...settings}>
        
                    {/* {console.log('AutomImagesSliderForBanner....',props.object)} */}
                
                    {Object.keys(props.object).length!=0?  
                            props.object.map(singleObject=>
                                
                                    <div  className="card-wrapper">
                                        <div className="card">
                                            <div className="card-image">
                                                <img src={singleObject.url} className="auto_rotate_images" />
                                            </div>
                                        </div>
                                    </div>
                                
                               
                            ):""}
                   
        </Slider>
    )
}
export default AutoImageSliderForBanners;