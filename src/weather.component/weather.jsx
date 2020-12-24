import React from "react";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import CloudIcon from '@material-ui/icons/Cloud';
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.css';
const Weather=(props)=>{
    return (
        <div className="container">
            <div className="location">
               <h1>{props.city}</h1>
               {whichIcon(props.icon)}
                {props.current? <h1 className="py-4">{props.current}&deg;</h1>: null}
                
                {minmaxTemp(props.min,props.max)}
                
                <h4 className="py-5">{props.description}</h4>
            </div>
        </div>
    )

}
function whichIcon(icon){
    switch(true){
        case icon>=200 && icon<=232:
            // Thunder Strom
        case icon>=300 && icon<=321:
            // Drizzle
        case icon>=500 && icon<=531:
            //  Rain
        case icon>=600 && icon<=622:
            // snow
            return(
                <h2>
                    <div className="py-4"><AcUnitIcon fontSize="large" color="disabled"/> </div>
                </h2>
                )
        break;
        case icon>=600:
           
        break;
        case icon>=701 && icon<=781:
            // Atmosphere
            return(
                <h2>
                    <div className="py-4"><WbSunnyIcon fontSize="large" color="action"/></div>
                </h2>
                )
        case icon==800:
            return(
                <h2>
                   <div className="py-4"><BeachAccessIcon fontSize="large" color="primary"/> </div>
                </h2>
                )
        break;  
        case icon>=801 && icon<=804:
            // clouds
            return(
                <h2>
                   <div className="py-4"><CloudIcon fontSize="large" color="primary"/> </div>
                </h2>
                )
        break;
        default:

    }
}
function minmaxTemp(min,max){
    if(min && max){
    return(
        <h2>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h2>
    )
    }else{
        
    }
}
export default Weather;