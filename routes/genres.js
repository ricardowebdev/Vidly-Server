const express  = require('express');
const mongoose = require('mongoose');
const router   = express.Router();
const { Genre, validate } = require('../models/genres');

router.get('/', async (req, res) => {
	try {
		const genres = await Genre
			.find()
			.sort({name: 1});

		if(!genres)
			throw new Error("Internal server error");						

		res.send(genres);		
	} catch(err) {
		res.status(400).send(err.message);
	}
});

router.get('/:id', async(req, res) => {
	try {
		const genre = await Genre.findById(req.params.id);

		if (!genre)
			throw new Error('Genre not found');

		res.send(genre);
	} catch(err) {
		return res.status(404).send(err.message);
	}
});

router.post('/', async (req, res) => {
	const { error } = validate(req.body);
	
	if (error) 
		return res.status(400).send(error.details[0].message);

	try {
		const genre = new Genre({
			name:   req.body.name,
			active: req.body.active || true
		});

		const result = await genre.save();

		if(!result)
			throw new Error("Bad request while saving new genre");

		res.send(result);
	} catch(err) {
		return res.status(400).send(err.message);		
	}
});

router.put('/:id', async (req, res) => {
	const { error } = validate(req.body);
	
	if (error) 
		return res.status(400).send(error.details[0].message);

	try {
		genre = await Genre.findById(req.params.id);

		if (!genre)
			throw new Error('Genre not found');

		genre.name   = req.body.name;
		genre.active = req.body.active || true;
		const result = await genre.save();

		if(!result)
			throw new Error("Failed while editing genre");

		res.send(genre);	
	} catch(err) {
		res.status(400).send(err.message);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const genre = await Genre.findById(req.params.id);

		if (!genre)
			throw new Error('Genre not found');

		const result = await Genre.remove({ _id: req.params.id });
		
		if(!result)
			throw new Error("Failed while removing genre");

		res.send(result);
	} catch(err) {
		res.status(400).send(err.message);
	}
});


module.exports = router;
