const express   = require('express');
const mongoose  = require('mongoose');
const router    = express.Router();
const { Genre } = require('../models/genres');
const { Movie, validate } = require('../models/movies');

router.get('/', async(req, res) => {
	try {
		const movies = await Movie.find()
								  .sort({ name: 1});

		if(!movies)
			throw new Error("Internal server error");								  

		res.send(movies);								  
	} catch(err) {
		res.status(500).send(err.message);
	}
});

router.get('/:id', async(req, res) => {
	try {
		const movie = await Movie.findById(req.params.id);
		if(!movie)
			throw new Error("Movie not found");

		res.send(movie);
	} catch(err) {
		res.status(404).send(err.message);
	}
});

router.post('/', async(req, res) => {
	let genre;
	let movie;

	// Validando o corpo da requisição
	try {
		const {error} = validate(req.body);
		if(error) 
			throw new Error(error);		
	} catch(err) {
		return res.status(400).send(err.message);
	}

	// Encontrado a collection de Genre
	try {
		genre = await Genre.findById(req.body.genre.id);
		if(!genre)
			throw new Error("Genre not found");
	} catch(err) {
		return res.status(404).send(err.message);
	}

	// Gravando o filme
	try {		
		movie = new Movie({
			title: 		     req.body.title,
			numberInStock:   req.body.numberInStock,
			dailyRentalRate: req.body.dailyRentalRate,
			genre: {
				_id: genre._id,
				name: genre.name
			}
		});

		const result = await movie.save();

		if(!result)
			throw new Error("Bad request");

		res.send(movie);
	} catch(err) {
		res.status(400).send(err.message);
	}
});

router.put('/:id', async(req, res) => {
	let movie;
	let genre;
	let result;

	// Validando requisição http
	try {
		const {error} = validate(req.body);
		if(error) 
			throw new Error(error); 
	} catch(err) {
		return res.send(400).send(err.message);
	}

	// Encontrando o genre
	try {	
		genre = await Genre.findById(req.body.genre.id);

		if(!genre)
			throw new Error("Genre not Found");
	} catch(err) {
		return res.status(404).send(err.message);
	}	

	// Encontrando o filme selecionado
	try {	
		movie = await Movie.findById(req.params.id);
		if(!movie)
			throw new Error("Movie not Found");
	} catch(err) {
		return res.status(404).send(err.message);
	}	

	// Editando o filme
	try {	
		movie.title           = req.body.title;
		movie.numberInStock   = req.body.numberInStock;
		movie.dailyRentalRate = req.body.dailyRentalRate;
		movie.genre           = genre;
		result                = await movie.save();

		if(!result)
			throw new Error("Bad Request");

		res.send(result);
	} catch(err) {
		res.status(400).send(err.message);
	}	
});

router.delete('/:id', async(req, res) => {
	let movie;
	let result;

	try {
		movie = await Movie.findById(req.params.id);

		if(!movie)
			throw new Error("Movie not found");
	} catch(err) {
		return res.status(404).send(err.message)
	}

	try {
		result = await Movie.remove({ _id: req.params.id });
		
		if(!result)
			throw new Error("Bad request");

		res.send(movie);
	} catch(err) {
		res.status(400).send(err.message);
	}
});

module.exports = router;