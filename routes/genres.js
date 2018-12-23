const express  = require('express');
const mongoose = require('mongoose');
const router   = express.Router();
const { Genre, validate } = require('../models/genres');

/**
 * @api {get} /api/gernres/ Solicita lista de generos
 * @apiName GetGenres
 * @apiGroup Genre
 *
 * @apiSuccess {boolean} active - Se o gênero está ativo ou não
 * @apiSuccess {String} _id - id do genero
 * @apiSuccess {String} name - nome do gênero
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5bf7c770b9ff941f03a238bb", 
 *        "active": true,
 *        "name": "Suspense",
 *     }, 
 *     {
 *        "_id": "5bf7c785b9ff941f03a238bd",
 *        "active": false,
 *        "name": "Comedia"
 *     }
 * 
 */
router.get('/', async (req, res) => {
	try {
		const genres = await Genre
			.find()
			.sort({name: 1});

		if(!genres)
			throw new Error("Internal server error");						

		res.send(genres);		
	} catch(err) {
		res.status(400).send(err.message);
	}
});


/**
 * @api {get} /api/genre/:id Solicita um gênero pelo id
 * @apiName GetGenre
 * @apiGroup Genre
 *
 * @apiParam {Number} id - unico do cliente.
 * 
 * @apiSuccess {String} _id - id do genero
 * @apiSuccess {Boolean} active - Se o gênero está ativo ou não
 * @apiSuccess {String} name - nome do gênero
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5bf7c785b9ff941f03a238bd",
 *        "active": true,
 *        "name": "Comedia"
 *     }
 *
 */
router.get('/:id', async(req, res) => {
	try {
		const genre = await Genre.findById(req.params.id);

		if (!genre)
			throw new Error('Genre not found');

		res.send(genre);
	} catch(err) {
		return res.status(404).send(err.message);
	}
});

/**
 * @api {post} /api/genre Insere um novo gênero
 * @apiName PostGenre
 * @apiGroup Genre
 * 
 * @apiParam {Boolean} active - Se é cliente está ativo ou não 
 * @apiParam {String}  name - nome do gênero
 *
 * @apiSuccess {Boolean} active - Se o gênero está ativo ou não
 * @apiSuccess {String} _id - id do genero
 * @apiSuccess {String} name - nome do gênero
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5bf4088f5d6b7145b98415c6",
 *        "active": true,
 *        "name": "Comedia"
 *     }
 *
 */
router.post('/', async (req, res) => {
	const { error } = validate(req.body);
	
	if (error) 
		return res.status(400).send(error.details[0].message);

	try {
		const genre = new Genre({
			name:   req.body.name,
			active: req.body.active || true
		});

		const result = await genre.save();

		if(!result)
			throw new Error("Bad request while saving new genre");

		res.send(result);
	} catch(err) {
		return res.status(400).send(err.message);		
	}
});

/**
 * @api {put} /api/genre/:id Edita um gênero
 * @apiName EditGenre
 * @apiGroup Genre
 *
 * @apiParam {String} _id - id do genero
 * @apiParam {Boolean} active - Se é cliente está ativo ou não 
 * @apiParam {String}  name - nome do gênero
 *
 * @apiSuccess {Boolean} active - Se o gênero está ativo ou não
 * @apiSuccess {String} _id - id do genero
 * @apiSuccess {String} name - nome do gênero
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5bf4088f5d6b7145b98415c6",
 *        "active": true,
 *        "name": "suspense",
 *     }
 *
 */
router.put('/:id', async (req, res) => {
	const { error } = validate(req.body);
	
	if (error) 
		return res.status(400).send(error.details[0].message);

	try {
		genre = await Genre.findById(req.params.id);

		if (!genre)
			throw new Error('Genre not found');

		genre.name   = req.body.name;
		genre.active = req.body.active || true;
		const result = await genre.save();

		if(!result)
			throw new Error("Failed while editing genre");

		res.send(genre);	
	} catch(err) {
		res.status(400).send(err.message);
	}
});

/**
 * @api {delete} /api/genre/:id Remove um gênero
 * @apiName DeleteGenre
 * @apiGroup Genre
 * 
 * @apiParam {Number} id - unico do gênero
 *
 * @apiSuccess {String} _id - id do genero
 * @apiSuccess {Boolean} active - Se o gênero está ativo ou não
 * @apiSuccess {String} name - nome do gênero
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5bf4088f5d6b7145b98415c6",
 *        "active": true,
 *        "name": "Suspense",
 *     }
 *
 */
router.delete('/:id', async (req, res) => {
	try {
		const genre = await Genre.findById(req.params.id);

		if (!genre)
			throw new Error('Genre not found');

		const result = await Genre.remove({ _id: req.params.id });
		
		if(!result)
			throw new Error("Failed while removing genre");

		res.send(result);
	} catch(err) {
		res.status(400).send(err.message);
	}
});


module.exports = router;
