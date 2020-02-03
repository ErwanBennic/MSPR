var express = require('express');
var router = express.Router();
const Promo = require('../modele/promo');

router.get('/', function (req, res, next) {
   Promo.findAll().then(promo => {
      res.send(JSON.stringify(promo, null, 4));
   });
});

module.exports = router;
