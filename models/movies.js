const mongoose        = require('mongoose');
const Joi             = require('joi');
const { GenreSchema } = require('./genres');

const MovieSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 50		
	},
	numberInStock: {
		type: Number,
		default: 0,		
	},
	dailyRentalRate: {
		type: Number,
		default: 0		
	},
	genre: {
		type: GenreSchema,
		required: true,
	}
});

const Movie = mongoose.model('movie', MovieSchema);


function validateMovie(movie) {
	const MovieSchema = {
		title: Joi.string()
				  .min(3)
				  .max(50)
				  .required(),

		numberInStock: Joi.number()
						  .default(0),

		dailyRentalRate: Joi.number()
						    .default(0),

		genre: {
			id: Joi.string()
				   .required()
		}						    
	}

	return Joi.validate(movie, MovieSchema);	
}

exports.Movie    = Movie;
exports.validate = validateMovie;
