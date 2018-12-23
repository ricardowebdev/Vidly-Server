// Includes da aplicação
const express  = require('express');
const mongoose = require('mongoose'); 
const cors     = require('cors');
const emails   = require('./routes/email');
const genres   = require('./routes/genres');
const clients  = require('./routes/clients');
const movies   = require('./routes/movies');
const rentals  = require('./routes/rentals');
const users    = require('./routes/users');
const app      = express();
const port     = process.env.PORT || 3000;

// Preparando a API
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

// Rotas da API
app.use('/sendmail',    emails);
app.use('/api/genres',  genres);
app.use('/api/clients', clients);
app.use('/api/movies',  movies);
app.use('/api/rentals', rentals);
app.use('/api/users',   users);

// Setando propiedades para cada ambiente
if(process.env.NODE_ENV == 'development') {
	mongoose.connect('mongodb://localhost/vidly')
		.then(() => console.log('connected to the database'))
		.catch((err) => console.log(err));	
} else {	
	const options = {
	    user: process.env.USERDB,
	    pass: process.env.PASSDB
	}
	const uri = process.env.URIDB;

	mongoose.connect(uri, options)
		.then(() => console.log('connected to the database in umbler'))
		.catch((err) => console.log(err));		
}

app.listen(port, () =>{
	console.log(`I am listening to the port ${port}...`);
});
