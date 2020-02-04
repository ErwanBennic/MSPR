const Client = require('../modele/client');
const logger = require('../helper/logger');
const Promo = require('../modele/promo');
const Promoclient = require('../modele/promoclient');


module.exports = class ClientDao {
   async getAllClients() {
      try {
         const client = await Client.findAll();
         const res = JSON.stringify(client, null, 4);
         return res;
      } catch (error) {
         logger.red('ClientDao.getAllClients', error)
      }
   }

   async getClientById(clientID) {
      try {
         const client = await Client.findByPk(clientID, {include : [{ model: Promo, as: 'promos' }]});
         const res = JSON.stringify(client, null, 4);
         return res;
      } catch (error) {
         logger.red('ClientDao.getClientById', error)
      }
   }

   async savePromoForClient(promoId, userId) {
      try {
         let romanoff = await Client.findByPk(userId, { include: [{ model: Promo, as: 'promos' }] });
         await Promoclient.create({id_promo : promoId, id_client : userId});
         logger.cyan("clientDao.savePromoClient", JSON.stringify(romanoff, null, 4));
           
      } catch (error) {
         logger.red('clientDao.savePromoForClient', error);
      }
   }
}