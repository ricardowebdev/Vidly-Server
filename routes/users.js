const mongoose = require('mongoose');
const express  = require('express');
const router   = express.Router();
const _        = require('lodash');
const bcrypt   = require('bcrypt');
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
		const user    = new User(_.pick(req.body, ['name', 'email', 'password']));
		const salt    = await bcrypt.genSalt(10);
		user.password = await bcrypt.hashSync(user.password, salt);
		const result  = await user.save()

		if (!result)
			throw new Error('Bad Request...');	
		
		res.send(_.pick(user, ['_id', 'name', 'email']));
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

		res.send(_.pick(user, ['_id', 'name', 'email']));

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

router.post('/login', async(req, res) => {
	const email    = req.body.email    || null;
	const password = req.body.password || null;

	try {		
		const user = await User.findOne({ email: email });
		if (!user)
			throw new Error('User or e-mail not valid');
			
		const result = await bcrypt.compare(password, user.password);			
		if (!result)
			throw new Error('User or e-mail not valid');
		
		res.send(result);
	} catch(err) {
		res.status(401).send(err.message);
	}
});

module.exports = router;