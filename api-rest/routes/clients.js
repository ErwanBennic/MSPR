var express = require('express');
var router = express.Router();
const Client = require('../modele/client');

router.get('/', function (req, res, next) {
   Client.findAll().then(client => {
      res.send(JSON.stringify(client, null, 4));
   });
});

module.exports = router;
