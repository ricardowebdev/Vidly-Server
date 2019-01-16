const Joi      = require('joi');
const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
	name:   {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50
	},
	isGold:  {
		type: Boolean,
		default: false
	},
	phone:  { 
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50
	}
});

const Client = mongoose.model('client', ClientSchema);

function validateClient(client) {
	const Schema = {
		name:   Joi.string()
				   .min(3)
				   .max(50)
				   .required(),

		phone:  Joi.string()
				   .min(3)
				   .max(50)
				   .required(),

		isGold: Joi.boolean()
		           .required(),
	}

	return Joi.validate(client, Schema);
}

exports.Client   = Client;
exports.validate = validateClient;