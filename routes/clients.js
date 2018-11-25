const mongoose = require('mongoose');
const express  = require('express');
const router   = express.Router();
const { Client, validate } = require('../models/clients');

router.get('/', async (req, res) => {
	try {
		const clients = await Client
			.find()
			.sort({ name: 1});

		res.send(clients);
	} catch(err) {
		res.status(400).send('Bad Request... ', err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const client = await Client.findById(req.params.id)
			
		if(!client)
			throw new Error("Client not found");			

		res.send(client);
	} catch(err) {
		res.status(404).send(err.message);
	}
});

router.post('/', async (req, res) => {
	const { error } = validate(req.body);
	
	if(error)
		return res.status(400).send(error.details[0].message);

	try {		
		const client = new Client({
			name:   req.body.name,
			isGold: req.body.isGold,
			phone:  req.body.phone,
		});

		const result = await client.save()

		if (!result)
			throw new Error('Bad Request...');	
		
		res.send(result);
	} catch(err) {
		res.status(400).send(err.message);
	}
});

router.put('/:id', async(req, res) => {
	const { error } = validate(req.body);
	
	if(error)
		return res.status(400).send(error.details[0].message);
	
	try {
		const client = await Client.findById(req.params.id);

		if(!client)
			throw new Error("Client not found");

		client.name   = req.body.name;
		client.phone  = req.body.phone;
		client.isGold = req.body.isGold;

		const result = await client.save();

		if(!result)
			throw new Error("Bad request while saving new Client");

		res.send(client);

	} catch(err) {
		res.status(404).send(err.message);
	}
});

router.delete('/:id', async(req, res) => {
	try {
		const client = await Client.findById({ _id: req.params.id });

		if(!client)
			throw new Error("Client not found");

		result = await client.remove();

		if(!result)
			throw new Error("Bad request while removing client");

		res.send(client);
	} catch(err) {
		res.status(404).send(err.message);
	}
});

module.exports = router;