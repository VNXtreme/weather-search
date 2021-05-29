const axios = require('axios');

const getLocationList = async (name) => {
	try {
		return await axios.get('/api/location/search/', {
			params: { query: name }
		})
	} catch (error) {
		return error.response;
	}
}

const getLocationWeather = async (woeid) => {
	try {
		return await axios.get(`/api/location/${woeid}`)
	} catch (error) {
		return error.response;
	}
}

module.exports = {
	getLocationList,
	getLocationWeather
}