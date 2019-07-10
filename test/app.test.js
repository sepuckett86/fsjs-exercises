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
});
