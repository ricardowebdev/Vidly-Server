const Joi      = require('joi');
const express  = require('express');
const mongoose = require('mongoose'); 
const genres   = require('./routes/genres');
const clients  = require('./routes/clients');
const movies   = require('./routes/movies');
const app      = express();
const port     = 5000;

app.use(express.json());
app.use('/api/genres',  genres);
app.use('/api/clients', clients);
app.use('/api/movies',  movies);

mongoose.connect('mongodb://localhost/vidly')
	.then(() => console.log('connected to the database'))
	.catch((err) => console.log(err));

app.listen(port, () =>{
	console.log(`I am listening to the port ${port}...`);
});