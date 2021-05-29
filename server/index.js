const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors')

const PORT = process.env.PORT;
const { getLocationList, getLocationWeather } = require('./services/metaWeather');

/**
 * Default URL for axios
 */
axios.defaults.baseURL = process.env.API_DOMAIN;

/**
 * Setup CORS, only allow Frontend's domain
 */
var corsOptions = {
	origin: process.env.FRONTEND_DOMAIN,
}
app.use(cors(corsOptions))

/**
 * Get the list of location
 * @query name
 */
app.get('/location', async (req, res) => {
	let { name } = req.query;
	const { data } = await getLocationList(name);
	res.json(data);
});

/**
 * Get the weather of a specific location
 * @query woeid
 */
app.get('/weather', async (req, res) => {
	let { woeid } = req.query;
	const { data } = await getLocationWeather(woeid);
	res.json(data);
});

app.listen(PORT, () => {
	console.log('Listening to port ' + PORT)
});