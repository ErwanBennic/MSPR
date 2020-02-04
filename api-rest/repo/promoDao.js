const Promos = require('../modele/promo');

const logger = require('../helper/logger');
const Client = require('../modele/client');


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
   
}