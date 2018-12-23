const mongoose = require('mongoose');
const express  = require('express');
const router   = express.Router();
const { Client, validate } = require('../models/clients');

/**
 * @api {get} /api/client/ Solicita lista de clientes
 * @apiName GetClients
 * @apiGroup Client
 *
 * @apiSuccess {boolean} isGold - Se é cliente Gold Ou não 
 * @apiSuccess {String} _id - id do cliente
 * @apiSuccess {String} name - nome do cliente
 * @apiSuccess {String} phone - Telefone do cliente
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5bf4088f5d6b7145b98415c6", 
 *        "isGold": true,
 *        "name": "Ricardo dos Santos Souza",
 *        "phone": "11991346177"
 *     }, 
 *     {
 *        "_id": "5bf4088f5d6b7145b98426d4",
 *        "isGold": true,
 *        "name": "Oswaldo Cruz",
 *        "phone": "11924568399" 
 *     }
 * 
 */
router.get('/', async (req, res) => {
	try {
		const clients = await Client
			.find()
			.sort({ name: 1});

		res.send(clients);
	} catch(err) {
		res.status(400).send('Bad Request... ', err);
	}
});

/**
 * @api {get} /api/client/:id Solicita um cliente pelo id
 * @apiName GetClient
 * @apiGroup Client
 *
 * @apiParam {Number} id - unico do cliente.
 * 
 * @apiSuccess {String} _id - id do cliente
 * @apiSuccess {Boolean} isGold - Se é cliente Gold Ou não 
 * @apiSuccess {String} name - nome do cliente
 * @apiSuccess {String} phone - Telefone do cliente
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5bf4088f5d6b7145b98415c6",
 *        "isGold": true,
 *        "name": "Ricardo dos Santos Souza",
 *        "phone": "11991346177" 
 *     }
 *
 */
router.get('/:id', async (req, res) => {
	try {
		const client = await Client.findById(req.params.id)
			
		if(!client)
			throw new Error("Client not found");			

		res.send(client);
	} catch(err) {
		res.status(404).send(err.message);
	}
});

/**
 * @api {post} /api/client Insere um novo cliente
 * @apiName PostClient
 * @apiGroup Client
 * 
 * @apiParam {Boolean} isGold - Se é cliente Gold Ou não 
 * @apiParam {String} name - nome do cliente
 * @apiParam {String} phone - Telefone do cliente
 *
 * @apiSuccess {Boolean} isGold - Se é cliente Gold Ou não 
 * @apiSuccess {string} _id - id unico do cliente
 * @apiSuccess {String} name - nome do cliente
 * @apiSuccess {String} phone - Telefone do cliente
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5bf4088f5d6b7145b98415c6",
 *        "isGold": true,
 *        "name": "Ricardo dos Santos Souza",
 *        "phone": "11991346177" 
 *     }
 *
 */
router.post('/', async (req, res) => {
	const { error } = validate(req.body);
	
	if(error)
		return res.status(400).send(error.details[0].message);

	try {		
		const client = new Client({
			name:   req.body.name,
			isGold: req.body.isGold,
			phone:  req.body.phone,
		});

		const result = await client.save()

		if (!result)
			throw new Error('Bad Request...');	
		
		res.send(result);
	} catch(err) {
		res.status(400).send(err.message);
	}
});

/**
 * @api {put} /api/client/:id Edita um cliente
 * @apiName EditClient
 * @apiGroup Client
 *
 * @apiParam {Boolean} isGold - Se é cliente Gold Ou não 
 * @apiParam {number} id - unico do cliente
 * @apiParam {String} name - nome do cliente
 * @apiParam {String} phone - Telefone do cliente
 * 
 * @apiSuccess {Boolean} isGold - Se é cliente Gold Ou não 
 * @apiSuccess {String} name - nome do cliente
 * @apiSuccess {String} phone - Telefone do cliente
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5bf4088f5d6b7145b98415c6",
 *        "isGold": true,
 *        "name": "Ricardo dos Santos Souza",
 *        "phone": "11991346177" 
 *     }
 *
 */
router.put('/:id', async(req, res) => {
	const { error } = validate(req.body);
	
	if(error)
		return res.status(400).send(error.details[0].message);
	
	try {
		const client = await Client.findById(req.params.id);

		if(!client)
			throw new Error("Client not found");

		client.name   = req.body.name;
		client.phone  = req.body.phone;
		client.isGold = req.body.isGold;

		const result = await client.save();

		if(!result)
			throw new Error("Bad request while saving new Client");

		res.send(client);

	} catch(err) {
		res.status(404).send(err.message);
	}
});

/**
 * @api {delete} /api/client/:id Remove um cliente
 * @apiName DeleteClient
 * @apiGroup Client
 * 
 * @apiParam {Number} id - unico do cliente
 *
 * @apiSuccess {Boolean} isGold - Se é cliente Gold Ou não 
 * @apiSuccess {String} name - nome do cliente
 * @apiSuccess {String} phone - Telefone do cliente
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "5bf4088f5d6b7145b98415c6",
 *        "isGold": true,
 *        "name": "Ricardo dos Santos Souza",
 *        "phone": "11991346177" 
 *     }
 *
 */
router.delete('/:id', async(req, res) => {
	try {
		const client = await Client.findById({ _id: req.params.id });

		if(!client) { throw new Error("Client not found"); }			

		result = await client.remove();

		if(!result)
			throw new Error("Bad request while removing client");

		res.send(client);
	} catch(err) {
		res.status(404).send(err.message);
	}
});

module.exports = router;