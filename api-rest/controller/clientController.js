var express = require('express');

const ClientDto = require('../dto/clientDto');
var router = express.Router();
const ClientDao = require('../repo/clientDao');
const clientDao = new ClientDao();

router.get('/:id', async function (req, res, next) {
   if(isNaN(parseInt(req.params.id))) return res.status(400).send({"error":"bad request"})

   const clientFromDao = await clientDao.getClientById(req.params.id);
   if(clientFromDao) {
      const clientDto = new ClientDto(clientFromDao);
      res.status(200).json(clientDto);
   } else {
      res.status(404).send({"error":"Client not found"});
   }
});

module.exports = router;
