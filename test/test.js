import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
import userRequests from '../server/data/index';

chai.use(chaiHttp);
chai.should();

describe('Get default route', () => {
  it('get default route with 200 OK status code', (done) => {
    chai.request(app)
      .get('/api/v1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        done();
      });
  });
});

describe('GET /users/requests', () => {
  it('should get all requests', (done) => {
    chai.request(app)
      .get('/api/v1/users/requests')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('userRequests');
        res.body.userRequests.should.be.an('array');
        done();
      });
  });
});

describe('GET /users/requests/<requestId>', () => {
  it('should get a single request', (done) => {
    chai.request(app)
      .get('/api/v1/users/requests/2')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('result');
        res.body.result.should.be.an('object');
        res.body.result.requestId.should.equal(2);
        done();
      });
  });
});

describe('POST /users/requests/', () => {
  it('should create a new request', (done) => {
    const request = {
      requestTitle: 'Change eyes',
      requestDetails: 'just change it',
    };
    chai.request(app)
      .post('/api/v1/users/requests/')
      .send(request)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property('newRequest');
        res.body.newRequest.should.be.an('object');
        res.body.newRequest.requestId.should.equal(userRequests.length);
        done();
      });
  });
});

describe('PUT /users/requests/<requestId>', () => {
  it('should modify existing user requests', (done) => {
    const request = {
      requestTitle: 'Change Ear',
      requestDetails: 'I want new ears',
    };
    chai.request(app)
      .put('/api/v1/users/requests/1')
      .send(request)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message')
          .to.equal('Request Modified Successfully');
        res.body.should.have.property('result')
          .to.be.an('object');
        res.body.result.requestId.should.equal(1);
        done();
      });
  });
});
