const express = require('express');
const cors = require('cors');
const { NODE_ENV, API_PATH, CLIENT_ORIGIN } = require('../../config');

const app = express();

app.use(cors({
	origin: CLIENT_ORIGIN,
}));

app.use(API_PATH + '/people', require('../people/people.router'));
app.use(API_PATH + '/pets', require('../pets/pets.router'));

app.use((error, req, res, next) => {
	let message = '';
	if (NODE_ENV === development) {
		console.log(error);
		message = error.message;
	}
	else {
		message = 'Server Error';
	}
	res.json({message});
});

module.exports = app;
