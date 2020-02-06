var express = require('express');
const PromoDao = require('../repo/promoDao');
const ClientDao = require('../repo/clientDao');

const promoDao = new PromoDao();
const clientDao = new ClientDao();

var router = express.Router();

router.get('/', async function (req, res, next) {
   const promos = await promoDao.getAllPromos();
   res.status(200).send(JSON.parse(promos));
});

router.get('/:promoId/', async (req, res, next) => {
   const promo = await promoDao.getPromoById(req.params.promoId);
   const payload = JSON.parse(promo);
   if(payload) {
      res.status(200).json(payload);
   } else {
      res.status(404).send({"error" : "No promo found"});
   }
});

router.get('/:promoId/:userId', async (req, res, next) => {
   const promo = await promoDao.getPromoById(req.params.promoId);
   await clientDao.savePromoForClient(req.params.promoId, req.params.userId);
   res.status(201).json(JSON.parse(promo));
});

module.exports = router;
