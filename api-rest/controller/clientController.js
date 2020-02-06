var express = require('express');
var router = express.Router();
const ClientDao = require('../repo/clientDao');
const clientDao = new ClientDao();

router.get('/', async function (req, res, next) {
   const clients = await clientDao.getAllClients();
   res.status(200).json(JSON.parse(clients));
   
});

router.get('/:id', async function (req, res, next) {
   const client = await clientDao.getClientById(req.params.id);
   const payload = JSON.parse(client);
   if(payload) {
      res.status(200).json(payload);
   } else {
      res.status(404).send({"error" : "No client found"});
   }
});

module.exports = router;
