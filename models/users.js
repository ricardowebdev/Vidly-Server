const mongoose        = require('mongoose');
const Joi             = require('joi');

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 50		
	},
	email: {
		type: String,
		required: true,
		unique: true,		
		minlength: 10,
		maxlength: 255				
	},
	password: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 255				
	},
});

const User = mongoose.model('user', UserSchema);


function validateUser(user) {
	const UserSchema = {
		name: Joi.string()
				  .min(3)
				  .max(50)
				  .required(),

		email: Joi.string()
				  .min(10)
				  .max(255)
				  .required(),

		password: Joi.string()
				  .min(3)
				  .max(255)
				  .required(),
	}

	return Joi.validate(user, UserSchema);	
}

exports.User     = User;
exports.validate = validateUser;
