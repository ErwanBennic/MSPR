const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const assert = require('assert');
const server = require('../../app');

describe('checks routes for client', () => {

   beforeEach(function() {
      chai.use(chaiHttp);
   });

   it('should send a response with code 200 and the right client in payload if he exists in db', (done) => {
      chai.request(server).get('/clients/1').end((err, res) => {
         res.should.have.status(200);
         res.should.be.json;
         res.body.should.have.property('nom');
         res.body.id.should.eq(1);
         done();
      });
   });


   it('should send a response with code 404 and error in payload if he doesnt exist in db', (done) => {
      chai.request(server).get('/clients/10000').end((err, res) => {
         res.should.have.status(404);
         res.body.should.have.property('error');
         done();
      });
   });

   it('should send a response with code 404 and error in payload if id is not a number', (done) => {
      chai.request(server).get('/clients/crocodile').end((err, res) => {
         res.should.have.status(404);
         res.body.should.have.property('error');
         done();
      });
   });

   it('should send a response with code 200 and list of clients in payload', (done) => {
      chai.request(server).get('/clients/').end((err, res) => {
         res.should.have.status(200);
         res.body.should.be.a('array');
         res.body[0].should.be.a('object');
         res.body[0].should.have.property('nom');
         done();
      });
   });

});