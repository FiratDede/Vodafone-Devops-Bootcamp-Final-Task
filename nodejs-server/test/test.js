const request = require('supertest');
const chai = require('chai');
const app = require('../app');

const expect = chai.expect;

describe('GET /', () => {
  it('should return Vodafone Devops Bootcamp!', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('Vodafone Devops Bootcamp!');
        done();
      });
  });
});