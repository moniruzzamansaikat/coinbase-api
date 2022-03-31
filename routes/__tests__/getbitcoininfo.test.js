const request = require('supertest');
const app = require('../../app.js');

describe('Coinbase api', () => {
  it('VALID: GET /api/getBitcoinInfo/usd', () => {
    return request(app)
      .get('/api/getBitcoinInfo/usd')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual(
          expect.objectContaining({
            currency: expect.any(String),
            currentRate: expect.any(Number),
            maxRate: expect.any(Number),
            minRate: expect.any(Number)
          })
        )
      });
  })

  it('INVALID: GET /api/getBitcoinInfo/bdt ', () => {
    return request(app)
      .get('/api/getBitcoinInfo/bdt')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual(
          expect.objectContaining({
            error: expect.any(String),
            status: expect.any(Number)
          })
        )
      });
  })
})