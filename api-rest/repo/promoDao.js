const Promos = require('../modele/promo');

const logger = require('../helper/logger');


module.exports = class ClientDao {
   async getPromoById(promoId) {
      try {
         return await Promos.findByPk(promoId);
      } catch (error) {
         logger.red('PromoDao.getPromoById', error);
      }
   }
}