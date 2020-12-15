import WeatherIcons from "../components/WeatherIcons";
import HumidityWind from "./HumidityWind";
import PropTypes from 'prop-types';

const WeatherSummary = ({weather, main, wind}) => {
    const name = weather[0] ? weather[0].main : "Clear";
    return (
        <>
            <div className="weatherCont">
                <WeatherIcons name={name}/>
                <p>{name}</p>
            </div>
            <HumidityWind humidity={main.humidity} wind={wind.speed}/>
        </>
    )
}

WeatherSummary.propTypes = {
    weather: PropTypes.array.isRequired,
    main: PropTypes.object.isRequired,
    wind: PropTypes.object.isRequired
}

export default WeatherSummary;