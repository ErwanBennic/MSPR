var express = require('express');
const PromoDao = require('../repo/promoDao');
const ClientDao = require('../repo/clientDao');
const PromoDto = require('../dto/promoDto');
const promoBusiness = require('../business/promoBusiness');

const promoDao = new PromoDao();
const clientDao = new ClientDao();

var router = express.Router();

router.get('/:promoId/', async (req, res, next) => {
   const promoFromDao = await promoDao.getPromoById(req.params.promoId);
   if(promoFromDao) {
      const promoDto = new PromoDto(promoFromDao);
      if(promoBusiness.isValid(promoDto)){
         res.status(200).json(promoDto);
      } else {
         res.status(204).send({"error" : "Promo not valid anymore"})
      }
   } else {
      res.status(404).send({"error" : "No promo found"});
   }
});

router.get('/:promoId/:userId', async (req, res, next) => {
   const promoFromDao = await promoDao.getPromoById(req.params.promoId);
   if(promoFromDao) {
      const promoDto = new PromoDto(promoFromDao);
      if(promoBusiness.isValid(promoDto)){
         await clientDao.savePromoForClient(req.params.promoId, req.params.userId);
         res.status(201).json(promoDto);
      } else {
         res.status(204).send({"error" : "Promo not valid anymore"})
      }
   } else {
      res.status(404).send({"error" : "No promo found"});
   }

});

module.exports = router;
