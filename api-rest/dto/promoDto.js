class PromoDto {
   constructor(promoDao) {
      this.code = promoDao.code;
      this.libelle = promoDao.libelle;
      this.pourcentage = promoDao.pourcentage;
      this.marque = promoDao.marque;
      this.dateperemption = promoDao.dateperemption;
      this.image = promoDao.image;
   }
}

module.exports = PromoDto;