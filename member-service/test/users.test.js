let chai = require('chai');
const serverUrl = 'http://localhost:5000';
chai.config.includeStack = true;
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = require('request');
var assert = require('chai').assert;
let should = chai.should();
const { expect } = require('chai');

//User Test
describe('For Users Test  API', () => {
  it('Should return it works ', function(done) {
    chai
      .request(serverUrl)
      .get('/api/users/test')
      .end((err, res) => {
        res.status.should.be.equal(200);
        res.body.msg.should.be.equal('success');
        done();
      });
  });
});
