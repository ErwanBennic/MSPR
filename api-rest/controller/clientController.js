var express = require('express');
var router = express.Router();
const ClientDao = require('../repo/clientDao');
const clientDao = new ClientDao();
const logger = require('../helper/logger');

router.get('/', async function (req, res, next) {
   const clients = await clientDao.getAllClients();
   logger.blue("Client from controller :", clients)
   res.send(clients);
});

router.get('/:id', async function (req, res, next) {
   const client = await clientDao.getClientById(req.params.id);
   res.send(client);
});

module.exports = router;
