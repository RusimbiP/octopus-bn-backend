import chai from 'chai';
import { describe, it } from 'mocha';
import { claims, mockToken } from './mockData/jwtTokenizer.mock';
import { encode, decode } from '../utils/jwtTokenizer';

describe('JSON web token', () => {
  it('should return JSON web token', () => {
    const token = encode(claims);
    chai.expect(token).equal(token);
  });
  it('should return object including claims', () => {
    const payload = decode(mockToken);
    chai.expect(payload).equal(payload);
  });
});