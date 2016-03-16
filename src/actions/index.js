import axios from 'axios';

const API_KEY = '0836261d845d34fe8ce4a0f4552a6012';
const URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${URL}&q=${city},lv`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}