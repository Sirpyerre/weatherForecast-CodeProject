import createDataContext from "./createDataContext";
import wheatherApi from "../api/"

const weatherReducer = (state, action) => {
    switch (action.type) {
        case 'set_users':
            return {...state, data: action.payload}
        default:
            return state;
    }
}

const getWeatherData = dispatch => async location => {

    const response = await wheatherApi({
        method: 'get',
    })
}

export const {Provider, Context} = createDataContext(
    weatherReducer,
    {getWeatherData},
    {data: []}
);