const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all pets currently up for adoption
	res.json(Pets.get());
});

router.delete('/:type', json, (req, res) => {
  // Remove a pet from adoption
	const { type } = req.params;
	if (type !== "cat" && type !== "dog") return res.status(400).json({ message: `"type" parameter must be "cat" or "dog"` });
	Pets.dequeue(req.params.type);
	res.status(204).end();
});

module.exports = router;
