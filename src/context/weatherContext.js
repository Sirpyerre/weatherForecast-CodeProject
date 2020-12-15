import createDataContext from "./createDataContext";
import weatherApi from "../api/"
import {api_key} from "../constants/api_url";

const weatherReducer = (state, action) => {
    switch (action.type) {
        case 'set_weather':
            return {...state, data: action.payload}
        case 'set_forecast':
            return {...state, forecast: action.payload}
        default:
            return state;
    }
}

const getWeatherData = dispatch => async location => {

    const response = await weatherApi({
        method: 'get',
        url: `weather?q=${location}&appid=${api_key}`
    });

    console.log(response.data);

    dispatch({type: 'set_weather', payload: response.data});
}

const getForecast = dispatch => async location => {
    const response = await weatherApi({
        method: 'get',
        url: `forecast?q=${location}&appid=${api_key}`
    });

    console.log(response.data);

    dispatch({type: 'set_forecast', payload: response.data});
}

export const {Provider, Context} = createDataContext(
    weatherReducer,
    {getWeatherData, getForecast},
    {data: {}, forecast: {}}
);