const Client = require('../modele/client');
const logger = require('../helper/logger');
const Promo = require('../modele/promo');


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
         const id = clientID;
         const client = await Client.findOne({
            include: [{
              model: Promo,
              as: 'promos',
              required: false,
              attributes: ['id', 'code', 'libelle', 'pourcentage', 'marque', 'dateperemption'],
              through: { attributes: [] }
            }],
            where: { id }
          });
         const res = JSON.stringify(client, null, 4);
         return res;
      } catch (error) {
         logger.red('ClientDao.getClientById', error)
      }
   }
}