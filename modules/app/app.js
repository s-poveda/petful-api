const express = require('express');
const cors = require('cors');
const { NODE_ENV } = require('../../config');

const app = express();

app.use(cors());

app.use('/people', require('../people/people.router'));
app.use('/pets', require('../pets/pets.router'));

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
