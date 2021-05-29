const axios = require('axios');

const getLocationList = async (name) => {
	console.log('name', name)
	try {
		return await axios.get('/api/location/search/', {
			params: { query: name }
		})
	} catch (error) {
		console.log('err', error.response.data)
		throw error.response;
	}
}

const getLocationWeather = async (woeid) => {
	try {
		return await axios.get(`/api/location/${woeid}`)
	} catch (error) {
		console.log('err', error, error.response);
		return error.response;
	}
}

module.exports = {
	getLocationList,
	getLocationWeather
}