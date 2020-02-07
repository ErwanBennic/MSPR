module.exports = {
   isValid(promoDto) {
      const peremption  = new Date(promoDto.dateperemption);
      const today = new Date();
      return  peremption > today;
   }
}