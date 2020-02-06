var assert = require('assert');
const ClientDto = require('../../dto/clientDto');
const PromoDto = require('../../dto/promoDto');
const chai = require('chai');
const logger = require('../../helper/logger');

const should = chai.should();


describe('check promoDto integrity', function () {

   const today = new Date();

   let tomorrow = new Date(today);
   tomorrow.setDate(today.getDate() + 1);

   let yesterday = new Date(today);
   yesterday.setDate(today.getDate() - 1);


   it('should return true if promo date is valid', function () {
      const mockPromoDao = {
         "id": 1,
         "code": "PRINTEMPS20",
         "libelle": "Le printemps, c'est maintenant !",
         "pourcentage": 15,
         "marque": "Nike",
         "dateperemption": tomorrow.getTime(),
      }

      const promoDto = new PromoDto(mockPromoDao);

      promoDto.isValid().should.be.true;
   });


   it('should return false if promo date is not valid', function () {
      const mockPromoDao = {
         "id": 1,
         "code": "PRINTEMPS20",
         "libelle": "Le printemps, c'est maintenant !",
         "pourcentage": 15,
         "marque": "Nike",
         "dateperemption": yesterday.getTime(),
      }
      const promoDto = new PromoDto(mockPromoDao);

      promoDto.isValid().should.be.false;
   });

});