import axios from "axios";
import { LocationType, LocationWeatherType } from "types/MetaWeatherType";

export const locationSearchApi = async (location: string = ''): Promise<LocationType[]> => {
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
