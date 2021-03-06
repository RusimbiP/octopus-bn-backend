import Chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import sinon from 'sinon';
import sendGrid from '@sendgrid/mail';
import { onlineClients } from '../utils/socket';
import io from 'socket.io-client';
import {
  invalidUuid, managerCredentials,
  nonExistTripId, tripIdNotAssigned,
  rejectedTripId, approvedRequestId,
  tripInPendingReject
} from './mock/rejectTripMock';

Chai.use(chaiHttp);
Chai.should();

describe('Rejecting a trip request', () => {
  it('logging out', (done) => {
    Chai
      .request(app)
      .delete('/api/v1/auth/logout')
      .end((err, res) => {
        expect(res);
        done();
      });
  });

  it('It should login auth successfuly', (done) => {
    Chai
      .request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'blaiseen@gmail.com',
        password: 'password',
      })
      .end((err, res) => {
        expect(res);
        done();
      });
  });

  it('should not allow non-manager users', (done) => {
    Chai
      .request(app)
      .put(`/api/v1/trips/${invalidUuid}/reject`)
      .end((err, res) => {
        expect(res.body.status).to.be.equal(403);
        expect(res.body.error).to.be.equal('Please you should be a manager');
        done();
      });
  });

  it('logging out', (done) => {
    Chai
      .request(app)
      .delete('/api/v1/auth/logout')
      .end((err, res) => {
        expect(res);
        done();
      });
  });

  it('It should login auth successfuly', (done) => {
    Chai
      .request(app)
      .post('/api/v1/auth/signin')
      .send(managerCredentials)
      .end((err, res) => {
        expect(res.body).to.have.keys('status', 'message', 'token');
        expect(res.body.status).to.be.equal(200);
        expect(res.body.message).to.be.equal('User login successfully');
        expect(res);
        done();
      });
  });
  it('should fail when trip request ID is not valid', (done) => {
    Chai
      .request(app)
      .put(`/api/v1/trips/${invalidUuid}/reject`)
      .end((err, res) => {
        expect(res.body.status).to.be.equal(400);
        expect(res.body.error).to.be.equal('Please use a valid trip request ID');
        done();
      });
  });
  it('should fail when trip request ID is not found', (done) => {
    Chai
      .request(app)
      .put(`/api/v1/trips/${nonExistTripId}/reject`)
      .end((err, res) => {
        expect(res.body.status).to.be.equal(404);
        expect(res.body.error).to.be.equal('Trip request is not found');
        done();
      });
  });
  it('should fail when trip request is not assigned to manager', (done) => {
    Chai
      .request(app)
      .put(`/api/v1/trips/${tripIdNotAssigned}/reject`)
      .end((err, res) => {
        expect(res.body.status).to.be.equal(403);
        expect(res.body.error).to.be.equal('Trip is not assigned to you!');
        done();
      });
  });
  it('should deny when trip is already rejected', (done) => {
    Chai
      .request(app)
      .put(`/api/v1/trips/${rejectedTripId}/reject`)
      .end((err, res) => {
        expect(res.body.status).to.be.equal(403);
        expect(res.body.error).to.be.equal('Trip has been already rejected!');
        done();
      });
  });
  it('should not reject approved trip request', (done) => {
    Chai
      .request(app)
      .put(`/api/v1/trips/${approvedRequestId}/reject`)
      .end((err, res) => {
        expect(res.body.status).to.be.equal(403);
        expect(res.body.error).to.be.equal('Trip has been already approved');
        done();
      });
  });

  before(async () => {
    const socketURL = 'http://localhost:3000';

    const options = {
      transports: ['websocket'],
      'force new connection': true
    };

    const client = io.connect(socketURL, options);
    client.on('connect', () => {
      client.emit('connect_user', '0e22ed1c-a1a5-4f49-a4ca-000732bfa49o');
    });
    await onlineClients.set('0e22ed1c-a1a5-4f49-a4ca-000732bfa49o');
    sinon.stub(sendGrid, 'send').returns({
      to: 'itsafact57@gmail.com',
      from: 'barefoot@noreply',
      subject: 'New trip request',
      text: 'Hello, Octopus.',
      html: 'emailTemplate'
    });
  });
  after(() => {
    sinon.restore();
  });
  it('should reject the trip request', (done) => {
    Chai
      .request(app)
      .put(`/api/v1/trips/${tripInPendingReject}/reject`)
      .end((err, res) => {
        expect(res.body.status).to.be.equal(200);
        expect(res.body.message).to.be.equal('Trip request is successfuly rejected');
        done();
      });
  });
});
