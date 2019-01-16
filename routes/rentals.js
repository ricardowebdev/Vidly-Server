const mongoose   = require('mongoose');
const express    = require('express');
const router     = express.Router();
const { Movie }  = require('../models/movies');
const { Client } = require('../models/clients');
const { Rental, validate } = require('../models/rentals');

router.get('/', async(req, res) => {
	try {
		const rentals = Rental.find().sort({ dayRetrieve: -1 });

		if(!rentals)
			throw new Error("Rentals not found, or there is no rental created yet");

		res.send(rentals);
	} catch(err) {
		res.status(404).send(err.message);
	}
});

router.get('/:id', async(req, res) => {
	try {
		const rental = Rental.findById(req.params.id);

		if(!rental)
			throw new Error("Rental not found");

		res.send(rental);
	
	} catch(err) {
		res.status(404).send(err.message);
	}
});

router.post('/', async(req, res) => {
	let movie;
	let client;
	let rental;

	// Validando requeest
	try {
		const { error } = validate(req.body);

		if(error) 
			throw new Error("Bad data request");
	} catch(err) {
		return res.status(400).send(err.message);	
	}

	// Encontrando o movie
	try {
		movie = await Movie.findById(req.body.idMovie);

		if(!movie) 
			throw new Error("Movie not found");
	} catch(err) {
		return res.status(404).send(err.message);	
	}


	// Encontrado o client
	try {
		client = await Client.findById(req.body.idClient);

		if(!client) 
			throw new Error("Client not found");
	} catch(err) {
		return res.status(404).send(err.message);	
	}		

	// Salvando o rental
	try {
		rental = new Rental({
			client: client,
			movie:  movie
		});

		const result = await rental.save();

		if(!result) 
			throw new Error("Bad data request");

		res.send(result);
	} catch(err) {
		return res.status(400).send(err.message);	
	}	
});

router.put('/:id', async(req, res) => {
	let movie;
	let client;
	let rental;

	// Validando requeest
	try {
		const { error } = validate(req.body);

		if(error) 
			throw new Error("Bad data request");
	} catch(err) {
		return res.status(400).send(err.message);	
	}

	// Encontrando o movie
	try {
		movie = await Movie.findById(req.body.idMovie);

		if(!movie) 
			throw new Error("Movie not found");
	} catch(err) {
		return res.status(404).send(err.message);	
	}


	// Encontrado o client
	try {
		client = await Client.findById(req.body.idClient);

		if(!client) 
			throw new Error("Client not found");
	} catch(err) {
		return res.status(404).send(err.message);	
	}

	// Salvando o rental
	try {
		rental = await Rental.findById(req.params.id);

		rental.dayReturn = req.body.dayReturn || now();
		rental.feeRent   = req.body.feeRent   || 0;
		rental.client    = client;
		rental.movie     = movie;

		const result = await rental.save();

		if(!result) 
			throw new Error("Bad data request");

		res.send(rental);
	} catch(err) {
		return res.status(400).send(err.message);	
	}				
});


router.delete('/:id', async(req, res) => {
	try{
		const rental = await Rental.findById(req.params.id);

		if (!rental)
			throw new Error("Rental not found");
	} catch(err) {
		return res.status(404).send(err.message)
	}

	try {
		const result = await Rental.remove({ _id: req.params.id });

		if(!result)
			throw new Error("Bad Request");

		res.send(rental);
	} catch(err) {
		res.status(400).send(err.message)		
	}
});

module.exports = router;