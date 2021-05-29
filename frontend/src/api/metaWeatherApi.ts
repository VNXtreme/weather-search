import axios from "axios";
import { LocationType } from "types/MetaWeatherType";

const locationSearchApi = async (location: string = ''): Promise<LocationType[]> => {
	let { data } = await axios.get('/location/', {
		params: { query: location }
	});
	return data;
}

export default locationSearchApi;
