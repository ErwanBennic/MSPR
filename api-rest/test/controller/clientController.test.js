const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const assert = require('assert');
const server = require('../../servertest');

describe('checks routes for client', () => {

   beforeEach(function() {
      chai.use(chaiHttp);
   });

   it('should send a response with code 200 and the right client in payload if he exists in db', (done) => {
      chai.request(server).get('/clients/1').end((err, res) => {
         res.should.have.status(200);
         res.should.be.json;
         should.exist(res.body);
         res.body.should.have.property('nom');
         res.body.should.have.property('promos');
         res.body.should.not.have.property('password');
         done();
      });
   });


   it('should send a response with code 404 and error in payload if he doesnt exist in db', (done) => {
      chai.request(server).get('/clients/10000').end((err, res) => {
         res.should.have.status(404);
         should.exist(res.body);
         res.body.should.have.property('error');
         done();
      });
   });

   it('should send a response with code 400 and error in payload if id is not a number', (done) => {
      chai.request(server).get('/clients/crocodile').end((err, res) => {
         res.should.have.status(400);
         should.exist(res.body);
         res.body.should.have.property('error');
         done();
      });
   });

});