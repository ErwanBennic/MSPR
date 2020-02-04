var express = require('express');
const PromoDao = require('../repo/promoDao');
const ClientDao = require('../repo/clientDao');

const promoDao = new PromoDao();
const clientDao = new ClientDao();

var router = express.Router();

router.get('/', async function (req, res, next) {
   const promos = await promoDao.getAllPromos();
   res.send(promos);
});

router.get('/:promoId/', async (req, res, next) => {
   const promo = await promoDao.getPromoById(req.params.promoId);
   res.send(promo);
});

router.post('/:promoId/:userId', async (req, res, next) => {
   const promo = await promoDao.getPromoById(req.params.promoId);
   await clientDao.savePromoForClient(req.params.promoId, req.params.userId);
   res.send(promo);
});

module.exports = router;
