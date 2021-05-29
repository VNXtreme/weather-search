import axios from "axios";
import { LocationType } from "types/MetaWeatherType";

const locationSearchApi = async (location: string = ''): Promise<LocationType[]> => {
	// let data = await axios.get(`https://www.metaweather.com/api/location/search/?query=${location}}`);
	let data = [{"title":"London","location_type":"City","woeid":44418,"latt_long":"51.506321,-0.12714"}];
	return data;
}

export default locationSearchApi;
