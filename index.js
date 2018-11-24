const Joi      = require('joi');
const express  = require('express');
const mongoose = require('mongoose'); 
const genres   = require('./routes/genres');
const clients  = require('./routes/clients');
const movies   = require('./routes/movies');
const app      = express();
const port     = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/genres',  genres);
app.use('/api/clients', clients);
app.use('/api/movies',  movies);

// Setando propiedades para cada ambiente
console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV == 'development') {
	mongoose.connect('mongodb://localhost/vidly')
		.then(() => console.log('connected to the database'))
		.catch((err) => console.log(err));	
} else {	
	const options = {
	    user: 'ricardo_souza',
	    pass: 'develop1990',
	}
	const uri = 'mongodb://tatooine.mongodb.umbler.com:36927/apidb';

	mongoose.connect(uri, options)
		.then(() => console.log('connected to the database in umbler'))
		.catch((err) => console.log(err));		
}

app.get('/', (req, res) => {
	res.send('Está rodando na umbler');
});

app.get('/test', (req, res) => {
	res.send('Deu deploy agora');
});

app.listen(port, () =>{
	console.log(`I am listening to the port ${port}...`);
});