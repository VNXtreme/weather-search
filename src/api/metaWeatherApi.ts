import axios from "axios";

const getLocationSearchApi = async (location: string): Promise<any> => {
	let data = await axios.get(`https://www.metaweather.com/api/location/search/?query=${location}}`);
	return data;
}

export default getLocationSearchApi;
