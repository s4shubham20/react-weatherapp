import { Component } from "react";
import { Search } from "./Search";
import { Result } from "./Result";
import axios from "axios";

class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            lat:    "",
            lon:    "",
            city:   "",
            weatherData:    null,
        }

        this.changeHandler  = this.changeHandler.bind(this);
    }

    changeHandler(evt) {
        const target = evt.target;
        // console.log(target);
        if(target.name == 'city'){
            this.setState({city:target.value});
        }
        else if(target.name == 'lat'){
            this.setState({lat:target.value});
        }
        else if(target.name == 'lon'){
            this.setState({lon:target.value});

        }
    }

    locationHandler = (evt) => {
        // console.log(evt.target)
        this.setState({
            lat:    "",
            lon:    "",
            city:   "",
            weatherData:    null,
        })
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (res) => {
                    setTimeout(() => {
                        console.log(res);
                        this.setState({
                            lat:res.coords.latitude,
                            lon:res.coords.longitude
                        })
                        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.coords.latitude}&lon=${res.coords.longitude}&appid=c2d8ce13ed63271a0eb900ee5d704516`)
                        .then((res) => {
                            console.log(res);
                            this.setState({
                                city:res.data.name,
                                weatherData:res.data,
                            })
                        }).catch((error) => {
                            console.log(error);
                        })
                    },500);
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }
    
    render(){
        return(
            <>
            <div className="container-fluid">
                    <Search 
                        city={this.state.city}
                        lat={this.state.lat}
                        lon={this.state.lon}
                        weatherData={this.state.weatherData}
                        change = {this.changeHandler}
                        getLocation={this.locationHandler}
                    ></Search>
                    <Result weatherData={this.state.weatherData}></Result>
            </div>

            </>
        );
    }
}

export default Weather;