const mongoose = require('mongoose');
const Joi      = require('mongoose');

const RentalSchema = mongoose.Schema({
	dayRetrieve: {
		type: Date,
		default: now(),		
	},
	dayReturn: {
		type: Date,		
	}
	feeRent: {
		type: Number,
		default: 0
	},
	client: { 
		type: new mongoose.Schema({
			_id: {
				type: String,
				required: true
			},
			name: {
				type: String,
				minlength: 3,
				maxlength: 50,
				required: true
			}
		}),
		required : true
	},

	movie: {
		type: new mongoose.Schema({
			_id: {
				type: String,
				required: true
			},
			title: {
				type: String,
				minlength: 3,
				maxlength: 50,
				required: true
			}
		}),
		required: true
	}
});

const Rental = new mongoose.model('rental', RentalSchema);

function validateRental(rental) {
	const RentalSchema = {
		clientId: Joi.string()
					 .required(),
		movieId:  Joi.string()
					 .required(),
	};

	return Joi.validate(rental, RentalSchema);
}

exports.validate     = validateRental;
exports.RentalSchema = RentalSchema;
exports.Rental       = Rental;
