const Client = require('../modele/client');
const logger = require('../helper/logger');
const Promo = require('../modele/promo');



module.exports = class ClientDao {

   async checkLogin(loginDto) {
      try {
         return await Client.findOne({ where: { email: loginDto.email},include : [{ model: Promo, as: 'promos' }] });
      } catch (error) {
         logger.red('LoginDao.checkLogin', error)
      }
   }
}