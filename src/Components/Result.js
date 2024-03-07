export const Result = (props) => {
    const { weatherData:data } = props;
    const src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const kelvinToCelcius = (k) => {
        return (k - 273.15).toFixed(2) + " °C"; 
    }
    return(
        <>
            <div className="row my-5">
                <div className="col-10 mx-auto">
                    <div className="card shadow">
                        <div className="card-header d-flex justify-items-content">
                            <h1>{data.name ?? ""} {kelvinToCelcius(data.main.temp)} {data.weather[0].description}</h1>
                            <img src={src}/>
                        </div>
                        <div className="card-body p-0">
                            <ul className="list-group">
                                <li className="list-group-item">Feel Likes <span >25*C</span></li>
                                <li className="list-group-item">Min Temp. <span >17*C</span></li>
                                <li className="list-group-item">Max Temp. <span >33*C</span></li>
                                <li className="list-group-item">Sunrise <span ></span></li>
                                <li className="list-group-item">Sunset<span >05:45</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}