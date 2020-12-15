import WeatherIcons from "../components/WeatherIcons";
import HumidityWind from "./HumidityWind";

const WeatherTemperature = ({data}) => {
    console.log("data:", data);
    const weather = data.weather;
    console.log("weather main", weather[0].main);
    const name = weather[0] ? weather[0].main : "Clear";
    console.log("name", name);
    return (
        <>
            <div className="weatherTemperatureCont">
                <WeatherIcons name={name}/>
                <p>{name}</p>
            </div>
            <HumidityWind humidity={data.main.humidity} wind={data.wind.speed}/>
        </>
    )
}

export default WeatherTemperature;