import axios from "axios";
import { ILocation, LocationWeatherType } from "types/MetaWeatherType";

export const locationSearchApi = async (location: string = ''): Promise<ILocation[]> => {
	let { data } = await axios.get('/location/', {
		params: { name: location }
	});
	return data;
}

export const locationWeatherApi = async (woeid: number): Promise<LocationWeatherType> => {
	let { data } = await axios.get('/weather/', {
		params: { woeid }
	});
	return data;
}
