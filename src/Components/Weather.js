import { Component } from "react";
import { Search } from "./Search";
import { Result } from "./Result";
import axios from "axios";
import Recent from './Recent';
class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            lat:    "",
            lon:    "",
            city:   "",
            weatherData:    null,
            isSearch: false,
            recent: []
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

    addToRecent = () => {
        let recent = this.state.recent;
        recent.push({
            lat: this.state.lat,
            lon: this.state.lon,
            city: this.state.city,
        })
        this.setState({recent}, () => {
            localStorage.setItem('recent', JSON.stringify(recent));
        });
    }

    componentDidMount = () => {
        const data = localStorage.getItem('recent');
        let recent = data == null ? [] : JSON.parse(data);
        this.setState({recent});
    }

    researchHandler = (lat , lon) => {
        this.state.weatherData = null;
        this.setState({lat, lon}, () => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=c2d8ce13ed63271a0eb900ee5d704516`)
            .then((res) => {
                setTimeout(() => {
                    this.setState({
                        city:res.data.name,
                        weatherData:res.data,
                    });
                }, 500)
            }).catch((error) => {
                console.log(error);
            })
        })
    }

    searchHandler = (evt) => {
        evt.preventDefault();
        this.setState({
            isSearch: true,
            weatherData:    null,
        })
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=c2d8ce13ed63271a0eb900ee5d704516`)
            .then((res) => {
                setTimeout(() => {
                    this.setState({
                        city:res.data.name,
                        weatherData:res.data,
                    }, () => {
                        this.addToRecent()
                    })
                }, 500)
            }).catch((error) => {
                console.log(error);
            })
    }

    locationHandler = (evt) => {
        // console.log(evt.target)
        this.setState({
            isSearch: true,
            weatherData:    null,
        })
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (res) => {
                    // console.log(res);
                    setTimeout(() => {
                        // console.log(res);
                        this.setState({
                            lat:res.coords.latitude,
                            lon:res.coords.longitude
                        })
                        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.coords.latitude}&lon=${res.coords.longitude}&appid=c2d8ce13ed63271a0eb900ee5d704516`)
                        .then((res) => {
                            // console.log(res);
                            this.setState({
                                city:res.data.name,
                                weatherData:res.data,
                            },() => {
                                this.addToRecent();
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
                <div className="row">
                    <div className="col-2 mt-5 pe-0">
                        <Recent research={this.researchHandler} recent={this.state.recent}/>
                    </div>
                    <div className="col-10 pe-0">
                    <Search 
                        city={this.state.city}
                        lat={this.state.lat}
                        lon={this.state.lon}
                        weatherData={this.state.weatherData}
                        change = {this.changeHandler}
                        getLocation={this.locationHandler}
                        search={this.searchHandler}
                        ></Search>
                    <Result search={this.state.isSearch} weatherData={this.state.weatherData}></Result>
                    </div>
                </div>
            </div>

            </>
        );
    }
}

export default Weather;