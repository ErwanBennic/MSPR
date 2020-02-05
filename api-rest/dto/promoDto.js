class Promo {
   constructor(promoDao) {
      this.code = promoDao.code;
      this.libelle = promoDao.libelle;
      this.pourcentage = promoDao.pourcentage;
      this.marque = promoDao.marque;
      this.dateperemption = promoDao.dateperemption;
   }

   isValid() {
      return new Date(this.dateperemption) > new Date();
   }
}