import axios from "axios";
import { LocationType } from "types/MetaWeatherType";

export const locationSearchApi = async (location: string = ''): Promise<LocationType[]> => {
	let { data } = await axios.get('/location/', {
		params: { name: location }
	});
	return data;
}

export const locationWeatherApi = async (woeid: number): Promise<LocationType[]> => {
	let { data } = await axios.get('/location/', {
		params: { woeid }
	});
	return data;
}
