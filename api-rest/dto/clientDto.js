const PromoDto = require('./promoDto')
class ClientDto {

   constructor(clientDao) {
      this.id = clientDao.id;
      this.nom = clientDao.nom;
      this.prenom = clientDao.prenom;
      this.email = clientDao.email;
      this.image = clientDao.image;
      this.promos = clientDao.promos.length > 0 ? this.getPromos(clientDao.promos) : [];

   }

   getPromos(promos) {
      let arr = []
      for(let p of promos){
         arr.push(new PromoDto(p));
      }
      return arr;
   }
}

module.exports = ClientDto;