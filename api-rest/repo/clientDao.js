const Client = require('../modele/client');
const logger = require('../helper/logger');
const Promo = require('../modele/promo');
const Promoclient = require('../modele/promoclient');


module.exports = class ClientDao {

   async getClientById(clientID) {
      try {
         return await Client.findByPk(clientID, {include : [{ model: Promo, as: 'promos' }]});
      } catch (error) {
         logger.red('ClientDao.getClientById', error)
      }
   }

   async savePromoForClient(promoId, userId) {
      try {
         await Promoclient.upsert({id_promo : promoId, id_client : userId})
      } catch (error) {
         logger.red('clientDao.savePromoForClient', error);
      }
   }
}