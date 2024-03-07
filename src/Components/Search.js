export const Search = (props) => {
    // const getLocation = {};
    const style = {
          cursor:'pointer'
        };
    return (
        <>
             <div className="row mt-5">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-12 col-md-4 mb-sm-3">
                            <div className="form-group">
                                <label className="form-label fw-bold" htmlFor="city">City Name:</label>
                                {/* <input className="form-control"></input> */}
                                <input type="text" className="form-control"name="city" id="city" placeholder="Enter city name here!" value={props.city}  onChange={props.change} disabled/>
                            </div>
                        </div>
                        <div className="d-none d-md-block col-md-1 mt-4">
                            <div className="form-group mt-1 text-center">
                               <h1 className="h2">||</h1>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="form-group">
                                <label className="form-label" htmlFor="getlocation"><i className="fa-solid fa-location-crosshairs" style={style} name="getlocation" onClick={props.getLocation}></i> Get Cordinate</label>
                                <div className="input-group">
                                    <span className="input-group-text" htmlFor="lat">Lat:</span>
                                    <input type="number" className="form-control" onChange={props.change} name="lat" id="lat" placeholder="Enter Latitude here!" value={props.lat}></input>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-sm-3">
                            <div className="form-group">
                                <label className="form-label"></label>
                                <div className="input-group mt-2">
                                    <span className="input-group-text" htmlFor="lon">Lon:</span>
                                    <input type="number" className="form-control" onChange={props.change} name="lon" id="lon" placeholder="Enter Longitude here!" value={props.lon}></input>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-1">
                            <div className="form-group d-grid">
                                <label className="form-label fw-bold">Search</label>
                                <form>
                                    <button className="btn btn-primary" onClick={props.search}>
                                        <i className="fa-brands fa-searchengin fs-4 mt-1"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </>
    )
}