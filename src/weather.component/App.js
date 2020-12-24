import React, { Component } from "react";

import Weather from "./weather";
import FormData from "./form";
const API_Key="2aee92b32a57c40439882b840ca6dede";

class App extends Component{
    constructor(){
        super()
        this.state={ city:"",
                    min_temp:"",
                    max_temp:"",
                    temp:"",
                    description:"",
                    icon:"",
                    error:false
                }
      
    }
    celsius(temp){
        let a=Math.floor(temp-273.15);
        return a;
    }
    getWeather=async(e)=>{
        e.preventDefault();
        console.log("......",e,e.target.elements.city.value);
        const city=e.target.elements.city.value;
        const country=e.target.elements.country.value;
        if(city && country){
            const data=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`);
            const response=await data.json();
            console.log(response);
            this.setState({ city: response.name,
                            min_temp: this.celsius(response.main.temp_min),
                            max_temp: this.celsius(response.main.temp_max),
                            temp: this.celsius(response.main.temp),
                            description:response.weather[0].description,
                            icon:response.weather[0].id

            })
    }else {
        console.log("error")
        this.setState({error:true})
    }
    }

    render(){
        return(
            <div>
                <FormData loadweather={this.getWeather} errors={this.state.error}/>
                <Weather min={this.state.min_temp} 
                        max={this.state.max_temp} 
                        current={this.state.temp} 
                        city={this.state.city} 
                        description={this.state.description}
                        icon={this.state.icon}
                        />
                </div>
        )
    }

}

export default App;
