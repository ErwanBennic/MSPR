var express = require('express');
const PromoDao = require('../repo/promoDao');
const ClientDao = require('../repo/clientDao');
const PromoDto = require('../dto/promoDto');
const promoBusiness = require('../business/promoBusiness');

const promoDao = new PromoDao();
const clientDao = new ClientDao();

var router = express.Router();

router.get('/:promoId/', async (req, res, next) => {
   if (isNaN(parseInt(req.params.promoId))) return res.status(400).send({ "error": "bad request" })


   const promoFromDao = await promoDao.getPromoById(req.params.promoId);
   if (promoFromDao) {
      const promoDto = new PromoDto(promoFromDao);
      if (promoBusiness.isValid(promoDto)) {
         return res.status(200).json(promoDto);
      }
   }
   res.status(404).send({"error":"Promo not found"});
});

router.post('/:promoId/:userId', async (req, res, next) => {
   const promoFromDao = await promoDao.getPromoById(req.params.promoId);
   if (promoFromDao) {
      const promoDto = new PromoDto(promoFromDao);
      if (promoBusiness.isValid(promoDto)) {
         await clientDao.savePromoForClient(req.params.promoId, req.params.userId);
         res.status(201).json(promoDto);
      } else {
         res.status(404).send({"error":"Promo not found"});
      }
   } else {
      res.status(404).send({ "error": "No promo found" });
   }
});

module.exports = router;
