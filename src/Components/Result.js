import Loader from "./Loader";

export const Result = (props) => {
    const { weatherData:data } = props;
    if(data === null && props.search !== false){
        return(
            <div className="d-flex justify-content-center mt-5">
                <Loader/>    
            </div>
        )
    }else if(data === null && props.search === false) {
        return (
            <div className="d-flex justify-content-center">
                <h1>Please search !</h1>
            </div>
        )
    }
    const src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const kelvinToCelcius = (k) => {
        return (k - 273.15).toFixed(2) + " °C"; 
    }

    const getTheDate = (stamp) => {
        const date = new Date(stamp * 1000);
        return date.toLocaleTimeString();
    }
    return(
        <>
            <div className="row my-5">
                <div className="col-10 mx-auto">
                    <div className="card shadow">
                        <div className="py-0 card-header d-flex align-items-content">
                            <div>
                                <img src={src}/>
                            </div>
                            <div className="mt-4">
                                <h3 className="mb-0">{data.name} {kelvinToCelcius(data.main.temp)} {data.weather[0].description}</h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush list-group-horizontal">
                                <li className="list-group-item">Feel Likes : <span >{kelvinToCelcius(data.main.feels_like)}</span></li>
                            </ul>
                            <ul className="list-group list-group-flush list-group-horizontal">
                                <li className="list-group-item">Min Temp : <span >{kelvinToCelcius(data.main.temp_min)}</span></li>
                            </ul>
                            <ul className="list-group list-group-flush list-group-horizontal">
                                <li className="list-group-item">Max Temp : <span >{kelvinToCelcius(data.main.temp_max)}</span></li>
                            </ul>
                            <ul className="list-group list-group-flush list-group-horizontal">
                                <li className="list-group-item">Sunrise : <span >{getTheDate(data.sys.sunrise)}</span></li>
                            </ul>
                            <ul className="list-group list-group-flush list-group-horizontal">
                                <li className="list-group-item">Sunset : <span >{getTheDate(data.sys.sunset)}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}