const mongoose = require('mongoose');
const Joi      = require('joi');

const GenreSchema = new mongoose.Schema({
	name: { 
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50,
	},
	active: {
		type: Boolean,
		default: true
	}
});

const Genre = mongoose.model('genre', GenreSchema);

function validateGenre(genre) {
	const schema = {
		name:   Joi.string()
				   .min(3)
				   .max(50)
				   .required(),

		active: Joi.boolean()
		           .optional(),

		_id:    Joi.optional()
	};

	return Joi.validate(genre, schema);	
}

exports.Genre       = Genre;
exports.GenreSchema = GenreSchema;
exports.validate    = validateGenre;
