import { WiDayThunderstorm,WiRainWind, WiDaySunny,WiDayShowers,
    WiDaySnowWind,
    WiDayFog,
    WiSmoke,
    WiCloudy,


} from "react-icons/wi";

const WeatherIcons = ({name})=>{
    switch (name) {
        case 'Thunderstorm':
            return <WiDayThunderstorm/>
        case 'Drizzle':
            return <WiDayShowers/>
        case 'Rain':
            return <WiRainWind/>
        case 'Snow':
            return <WiDaySnowWind/>
        case 'Mist':
        case 'Fog':
            return <WiDayFog/>
        case 'Smoke':
            return <WiSmoke/>
        case 'Haze':
            return <WiRainWind/>
        case 'Dust':
            return <WiRainWind/>

        case 'Sand':
            return <WiRainWind/>
        case 'Ash':
            return <WiRainWind/>
        case 'Squall':
            return <WiRainWind/>
        case 'Tornado':
            return <WiRainWind/>
        case 'Clouds':
            return <WiCloudy/>
        default:
            return <WiDaySunny/>


    }
}

export default WeatherIcons;