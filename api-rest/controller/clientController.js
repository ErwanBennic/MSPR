var express = require('express');

const ClientDto = require('../dto/clientDto');
var router = express.Router();
const ClientDao = require('../repo/clientDao');
const clientDao = new ClientDao();

router.get('/:id', async function (req, res, next) {
   const clientFromDao = await clientDao.getClientById(req.params.id);
   if(clientFromDao) {
      const clientDto = new ClientDto(clientFromDao);
      res.status(200).json(clientDto);
   } else {
      res.status(204).send({"error" : "No client found"});
   }
});

module.exports = router;
