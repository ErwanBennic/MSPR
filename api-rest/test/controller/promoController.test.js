const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const assert = require('assert');
const server = require('../../servertest');

describe('checks routes for promos', () => {

   beforeEach(function() {
      chai.use(chaiHttp);
   });

   it('should send a response with code 200 and the right promo in payload if it exists in db', (done) => {
      chai.request(server).get('/promos/1').end((err, res) => {
         res.should.have.status(200);
         res.should.be.json;
         should.exist(res.body);
         res.body.should.have.property('libelle');
         done();
      });
   });


   it('should send a response with code 204 and error in payload if he doesnt exist in db', (done) => {
      chai.request(server).get('/promos/10000').end((err, res) => {
         res.should.have.status(204);
         done();
      });
   });

   it('should send a response with code 404 and error in payload if id is not a number', (done) => {
      chai.request(server).get('/promos/crocodile').end((err, res) => {
         res.should.have.status(404);
         res.body.should.have.property('error');
         done();
      });
   });

   it('should send a response with code 201 and one the good promo in payload', (done) => {
      chai.request(server).post('/promos/1/2').end((err, res) => {
         res.should.have.status(201);
         res.should.be.json;
         should.exist(res.body);
         res.body.should.have.property('libelle');
         done();
      });
   });
});