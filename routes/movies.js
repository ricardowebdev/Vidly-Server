const express   = require('express');
const router    = express.Router();
const { Genre } = require('../models/genres');
const { Movie, validate } = require('../models/movies');

/**
 * @api {get} /api/movies/ Solicita lista de filmes
 * @apiName GetMovies
 * @apiGroup Movies
 * 
 * @apiSuccess {String} _id - id do filme
 * @apiSuccess {Number} numberInStock  - Numero de filmes em stock
 * @apiSuccess {Number} dailyRentalRate - Preço da diaria
 * @apiSuccess {String} title - Titulo do filme
 * @apiSuccess {Object} genre - Gênero do filme
 * @apiSuccess {String} genre.active - Se o gênero está ativo ou não
 * @apiSuccess {String} genre._id - Id unico do gênero
 * @apiSuccess {String} genre.name - Nome do Gênero
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5c16cac2932de1301f063d63", 
 *        "numberInStock": 2,
 *        "dailyRentalRate": 3,
 *        "title": "O pequenino",
 *        "genre": {
 *          "_id": "5bf7c785b9ff941f03a238bd",
 *          "active": true,
 *          "name": "comedy"
 *        }
 *     }, 
 *     {
 *        "_id": "5c16cb83932de1301f063d72", 
 *        "numberInStock": 1,
 *        "dailyRentalRate": 5,
 *        "title": "Batman Begins",
 *        "genre": {
 *          "_id": "5bf7c770b9ff941f03a238bb",
 *          "active": true,
 *          "name": "Ação"
 *        }
 *     }
 * 
 */
router.get('/', async(req, res) => {
	try {
		const movies = await Movie.find()
								  .sort({ name: 1});

		if(!movies)
			throw new Error("Internal server error");								  

		res.send(movies);								  
	} catch(err) {
		res.status(500).send(err.message);
	}
});

/**
 * @api {get} /api/movies/:id Solicita um filme pelo ID
 * @apiName GetMovie
 * @apiGroup Movies
 * 
 * @apiSuccess {String} _id - id do filme
 * @apiSuccess {Number} numberInStock  - Numero de filmes em stock
 * @apiSuccess {Number} dailyRentalRate - Preço da diaria
 * @apiSuccess {String} title - Titulo do filme
 * @apiSuccess {Object} genre - Gênero do filme
 * @apiSuccess {String} genre.active - Se o gênero está ativo ou não
 * @apiSuccess {String} genre._id - Id unico do gênero
 * @apiSuccess {String} genre.name - Nome do Gênero
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5c16cac2932de1301f063d63", 
 *        "numberInStock": 2,
 *        "dailyRentalRate": 3,
 *        "title": "O pequenino",
 *        "genre": {
 *          "_id": "5bf7c785b9ff941f03a238bd",
 *          "active": true,
 *          "name": "comedy"
 *        }
 *     }
 * 
 */
router.get('/:id', async(req, res) => {
	try {
		const movie = await Movie.findById(req.params.id);
		if(!movie)
			throw new Error("Movie not found");

		res.send(movie);
	} catch(err) {
		res.status(404).send(err.message);
	}
});

/**
 * @api {post} /api/movies Insere um novo filme
 * @apiName PostMovies
 * @apiGroup Movies
 *
 * @apiParam {Number} numberInStock  - Numero de filmes em stock
 * @apiParam {Number} dailyRentalRate - Preço da diaria
 * @apiParam {String} title - Titulo do filme
 * @apiParam {Object} genre - Gênero do filme
 * @apiParam {String} genre.id - Id unico do gênero 
 * 
 * @apiSuccess {String} _id - id do filme
 * @apiSuccess {Boolean} numberInStock  - Numero de filmes em stock
 * @apiSuccess {String} dailyRentalRate - Preço da diaria
 * @apiSuccess {String} title - Titulo do filme
 * @apiSuccess {Object} genre - Gênero do filme
 * @apiSuccess {String} genre.active - Se o gênero está ativo ou não
 * @apiSuccess {String} genre._id - Id unico do gênero
 * @apiSuccess {String} genre.name - Nome do Gênero
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5c16cac2932de1301f063d63", 
 *        "numberInStock": 2,
 *        "dailyRentalRate": 3,
 *        "title": "O pequenino",
 *        "genre": {
 *          "_id": "5bf7c785b9ff941f03a238bd",
 *          "active": true,
 *          "name": "comedy"
 *        }
 *     }
 *
 */
router.post('/', async(req, res) => {
	let genre;
	let movie;

	// Validando o corpo da requisição
	try {
		const {error} = validate(req.body);
		if(error) 
			throw new Error(error);		
	} catch(err) {
		return res.status(400).send(err.message);
	}

	// Encontrado a collection de Genre
	try {
		genre = await Genre.findById(req.body.genre.id);
		if(!genre)
			throw new Error("Genre not found");
	} catch(err) {
		return res.status(404).send(err.message);
	}

	// Gravando o filme
	try {		
		movie = new Movie({
			title: 		     req.body.title,
			numberInStock:   req.body.numberInStock,
			dailyRentalRate: req.body.dailyRentalRate,
			genre: {
				_id: genre._id,
				name: genre.name
			}
		});

		const result = await movie.save();

		if(!result)
			throw new Error("Bad request");

		res.send(movie);
	} catch(err) {
		res.status(400).send(err.message);
	}
});

/**
 * @api {put} /api/movies/:id Altera um cliente pelo id
 * @apiName PutMovies
 * @apiGroup Movies
 *
 * @apiParam {Number} id - unico do cliente.
 * @apiParam {Number} numberInStock  - Numero de filmes em stock
 * @apiParam {Number} dailyRentalRate - Preço da diaria
 * @apiParam {String} title - Titulo do filme
 * @apiParam {Object} genre - Gênero do filme
 * @apiParam {String} genre.id - Id unico do gênero 
 * 
 * @apiSuccess {String} _id - id do filme
 * @apiSuccess {Boolean} numberInStock  - Numero de filmes em stock
 * @apiSuccess {String} dailyRentalRate - Preço da diaria
 * @apiSuccess {String} title - Titulo do filme
 * @apiSuccess {Object} genre - Gênero do filme
 * @apiSuccess {String} genre.active - Se o gênero está ativo ou não
 * @apiSuccess {String} genre._id - Id unico do gênero
 * @apiSuccess {String} genre.name - Nome do Gênero
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5c16cac2932de1301f063d63", 
 *        "numberInStock": 2,
 *        "dailyRentalRate": 3,
 *        "title": "O pequenino",
 *        "genre": {
 *          "_id": "5bf7c785b9ff941f03a238bd",
 *          "active": true,
 *          "name": "comedy"
 *        }
 *     }
 *
 */
router.put('/:id', async(req, res) => {
	let movie;
	let genre;
	let result;

	// Validando requisição http
	try {
		const {error} = validate(req.body);
		if(error) 
			throw new Error(error); 
	} catch(err) {
		return res.send(400).send(err.message);
	}

	// Encontrando o genre
	try {	
		genre = await Genre.findById(req.body.genre.id);

		if(!genre)
			throw new Error("Genre not Found");
	} catch(err) {
		return res.status(404).send(err.message);
	}	

	// Encontrando o filme selecionado
	try {	
		movie = await Movie.findById(req.params.id);
		if(!movie)
			throw new Error("Movie not Found");
	} catch(err) {
		return res.status(404).send(err.message);
	}	

	// Editando o filme
	try {	
		movie.title           = req.body.title;
		movie.numberInStock   = req.body.numberInStock;
		movie.dailyRentalRate = req.body.dailyRentalRate;
		movie.genre           = genre;
		result                = await movie.save();

		if(!result)
			throw new Error("Bad Request");

		res.send(result);
	} catch(err) {
		res.status(400).send(err.message);
	}	
});

/**
 * @api {delete} /api/movies/:id Remove um filme
 * @apiName DeleteMovie
 * @apiGroup Movies
 * 
 * @apiParam {Number} id - unico do gênero
 *
 * @apiSuccess {String} _id - id do filme
 * @apiSuccess {Boolean} numberInStock  - Numero de filmes em stock
 * @apiSuccess {String} dailyRentalRate - Preço da diaria
 * @apiSuccess {String} title - Titulo do filme
 * @apiSuccess {Object} genre - Gênero do filme
 * @apiSuccess {String} genre.active - Se o gênero está ativo ou não
 * @apiSuccess {String} genre._id - Id unico do gênero
 * @apiSuccess {String} genre.name - Nome do Gênero
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5c16cac2932de1301f063d63", 
 *        "numberInStock": 2,
 *        "dailyRentalRate": 3,
 *        "title": "O pequenino",
 *        "genre": {
 *          "_id": "5bf7c785b9ff941f03a238bd",
 *          "active": true,
 *          "name": "comedy"
 *        }
 *     }
 *
 */
router.delete('/:id', async(req, res) => {
	let movie;
	let result;

	try {
		movie = await Movie.findById(req.params.id);

		if(!movie)
			throw new Error("Movie not found");
	} catch(err) {
		return res.status(404).send(err.message)
	}

	try {
		result = await Movie.remove({ _id: req.params.id });
		
		if(!result)
			throw new Error("Bad request");

		res.send(movie);
	} catch(err) {
		res.status(400).send(err.message);
	}
});

module.exports = router;