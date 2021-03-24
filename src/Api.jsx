import axios from "axios";
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "5933bd916da0fd1ddbe787c9ee77eeb6";
export const fetchWeather = async (query) => {
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			units: "metric",
			APPID: API_KEY,
		},
	});

	return data;
};
