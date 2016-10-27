import axios from 'axios';

const API_KEY = 'a0f72e4e02488f12b497038491f6db96';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Our Action Creator
export function fetchWeather(city) {
  // If you wanted users to be able to search in other countries
  // you would need to add in the country code vs. us as we have below.
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
