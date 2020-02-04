const Promos = require('../modele/promo');

const logger = require('../helper/logger');


module.exports = class ClientDao {
   async getAllPromos() {
      try {
         const promos = await Promos.findAll();
         const res = JSON.stringify(promos, null, 4);
         return res;
      } catch (error) {
         logger.red('PromoDao.getAllPromos', error)
      }
   }
   
   async getPromoById(promoId) {
      try {
         const promo = await Promos.findByPk(promoId);
         const res = JSON.stringify(promo, null, 4);
         return res
      } catch (error) {
         logger.red('PromoDao.getPromoById', error);
      }
   }

   
}