class ClientDto {
   constructor(clientDao) {
      this.nom = clientDao.nom;
      this.prenom = clientDao.prenom;
      this.email = clientDao.email;
      this.promos = clientDao.promos.length > O ? this.getPromos(clientDao.promos) : [];

   }

   getPromos(promos) {
      let arr = []
      for(p of promos){
         arr.push(new PromoDto(p));
      }
      return arr;
   }
}