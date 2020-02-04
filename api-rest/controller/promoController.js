var express = require('express');
const PromoDao = require('../repo/promoDao');
const promoDao = new PromoDao();

var router = express.Router();

router.get('/', async function (req, res, next) {
   const promos = await promoDao.getAllPromos();
   res.send(promos);
});



module.exports = router;
