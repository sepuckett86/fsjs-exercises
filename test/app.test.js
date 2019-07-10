const app = require('../lib/app');
const request = require('supertest');

describe('app', () => {
  it('loads index.html with path "/"', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Home'));
      });
  });
  it('loads index.html with path "/index.html"', () => {
    return request(app)
      .get('/index.html')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Home'));
      });
  });
  it('gets an array of dogs with "/api/v1/dogs"', () => {
    return request(app)
      .get('/api/v1/dogs')
      .then(res => {
        expect(res.body).toEqual(expect.arrayContaining([{ 
          name: 'Fido', 
          breed: 'Golden Retriever', 
          color: 'orange' }]));
      });
  });
});
