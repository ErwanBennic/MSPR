const logger = require('../helper/logger')

class PromoDto {
   constructor(promoDao) {
      this.code = promoDao.code;
      this.libelle = promoDao.libelle;
      this.pourcentage = promoDao.pourcentage;
      this.marque = promoDao.marque;
      this.dateperemption = promoDao.dateperemption;
   }

   isValid() {
      const peremption  = new Date(this.dateperemption);
      const today = new Date();
      return  peremption > today;
   }
}

module.exports = PromoDto;