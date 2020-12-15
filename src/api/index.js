import axios from 'axios';
import {api_key, url_base_weather} from "../constants/api_url";

const options = {
    baseURL: url_base_weather,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
};
const instance = axios.create(options);

instance.interceptors.request.use(
    config => {
        const token = api_key
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

export default instance;