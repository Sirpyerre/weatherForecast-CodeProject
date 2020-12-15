const HumidityWind = ({humidity, wind}) => {
    return (
        <div className="humidity-wind">
            <div className="humidity">
                <p>Humidity</p>
                <span className="humidity-percent">
                    {humidity} %
                </span>
            </div>
            <div className="wind">
                <p>Wind speed</p>
                <span className="wind-speed">
                    {wind} km/j
                </span>
            </div>
        </div>
    )
}

export default HumidityWind;