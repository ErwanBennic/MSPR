var assert = require('assert');
const ClientDto = require('../../dto/clientDto');
const PromoDto = require('../../dto/promoDto');
const chai = require('chai');
const should = chai.should();


describe('check clientDto integrity', function () {
   
   it('should init clientDto with promoDto from clientDao with a promo', function () {
      const mockPromo  = {
         "id": 1,
         "code": "PRINTEMPS20",
         "libelle": "Le printemps, c'est maintenant !",
         "pourcentage": 15,
         "marque": "Nike",
         "dateperemption": "2020-03-31",
         "promoclient": {
           "id_client": 1,
           "id_promo": 1
         }
       }
      const mockClientDao = {
         "id" : 13,
         "nom" : "Fury",
         "prenom" : "Nick",
         "email" : "nickfury@shield.com",
         "password" : "pwd",
         "promos": [
            mockPromo
          ]
      }

      const clientDto = new ClientDto(mockClientDao);
      clientDto.promos[0].should.be.instanceOf(PromoDto);

   });

   it('should init clientDto with no promoDto from clientDao with no promo', function () {
      const mockClientDao = {
         "id" : 13,
         "nom" : "Fury",
         "prenom" : "Nick",
         "email" : "nickfury@shield.com",
         "password" : "pwd",
         "promos": [
         ]
      }

      const clientDto = new ClientDto(mockClientDao);
      clientDto.promos.length.should.eq(0);

   });

});