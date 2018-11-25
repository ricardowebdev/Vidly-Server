const mongoose = require('mongoose');
const express  = require('express');
const router   = express.Router();
const { User, validate } = require('../models/users');

router.get('/', async (req, res) => {
	try {
		const users = await User
			.find()
			.sort({ name: 1})
			.select({ _id: 1, name: 1, email: 1});

		if(!users)
			throw new Error("Any users inserted yet");

		res.send(users);
	} catch(err) {
		res.status(400).send('Bad Request... ', err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
							   .select({ _id: 1, name: 1, email: 1});
			
		if(!user)
			throw new Error("User not found");			

		res.send(user);
	} catch(err) {
		res.status(404).send(err.message);
	}
});

router.post('/', async (req, res) => {
	const { error } = validate(req.body);
	
	if(error)
		return res.status(400).send(error.details[0].message);

	try {		
		const user = new User({
			name:      req.body.name,
			email:     req.body.email,
			password:  req.body.password,
		});

		const result = await user.save()

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
		const user = await User.findById(req.params.id)
							   .select({ _id: 1, name: 1, email: 1});
		if(!user)
			throw new Error("User not found");

		user.name     = req.body.name;
		user.email    = req.body.email;
		user.password = req.body.passowrd;

		const result = await user.save();

		if(!result)
			throw new Error("Bad request while saving new User");

		res.send(user);

	} catch(err) {
		res.status(404).send(err.message);
	}
});

router.delete('/:id', async(req, res) => {
	try {
		const user = await User.findById(req.params.id)
							   .select({ _id: 1, name: 1, email: 1});

		if(!user)
			throw new Error("User not found");

		result = await User.remove({ _id: req.params.id });

		if(!result)
			throw new Error("Bad request while removing User");

		res.send(user);
	} catch(err) {
		res.status(404).send(err.message);
	}
});

module.exports = router;