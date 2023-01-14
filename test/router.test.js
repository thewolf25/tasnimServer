process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Book = require('../models/task');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Books', () => {
    beforeEach((done) => { //Before each test we empty the database
        Book.remove({}, (err) => { 
           done();           
        });        
    });
/*
  * Test the /GET route
  */
  describe('/GET book', () => {
      it('it should GET all the tasks', (done) => {
        chai.request(server)
            .get('/api/tasks/')
            .end((err, res) => {
                console.log(res)
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
                  done();
            });
      });
  });

});