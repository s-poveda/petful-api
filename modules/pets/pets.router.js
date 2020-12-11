const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all pets currently up for adoption
	res.json(Pets.get());
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption
	Pets.dequeue(req.params.type);
	res.status(204).end();
});

module.exports = router;
