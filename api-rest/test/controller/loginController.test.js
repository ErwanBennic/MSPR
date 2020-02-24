const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const assert = require('assert');
const server = require('../../servertest');

describe('checks routes for login', () => {

   beforeEach(function() {
      chai.use(chaiHttp);
   });

   it('should send a response with code 200 and the right client in payload if credentials are ok', (done) => {
      const body = {
         email : "brucebanner@ici.fr",
         password : "brucebanner"
      }
      chai.request(server).post('/login/').send(body).end((err, res) => {
         res.should.have.status(200);
         res.should.be.json;
         should.exist(res.body);
         res.body.should.have.property('nom');
         res.body.should.not.have.property('id');
         done();
      });
   });

   it('should send a response with code 400 and error in payload if there is missing parameter', (done) => {
      const body = {
         email : "brucebanner@ici.fr"
      }
      chai.request(server).post('/login/').send(body).end((err, res) => {
         res.should.have.status(400);
         should.exist(res.body);
         res.body.should.have.property('error');
         done();
      });
   });

   it('should send a response with code 403 and error in payload if email doesn\'t exist', (done) => {
      const body = {
         email : "girafe@ici.fr",
         password : "brucebanner"
      }
      chai.request(server).post('/login/').send(body).end((err, res) => {
         res.should.have.status(403);
         should.exist(res.body);
         res.body.should.have.property('error');
         done();
      });
   });

   it('should send a response with code 404 and error in payload if password doesn\'t match a right email', (done) => {
      const body = {
         email : "brucebanner@ici.fr",
         password : "girafe"
      }
      chai.request(server).post('/login/').send(body).end((err, res) => {
         res.should.have.status(403);
         should.exist(res.body);
         res.body.should.have.property('error');
         done();
      });
   });

});