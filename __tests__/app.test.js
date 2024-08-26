const request = require('supertest');
const app = require('../app');

describe('Express App', () => {
  it('should respond with Hello, World! on the root path', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });

  it('should return 404 for undefined routes', async () => {
    const response = await request(app).get('/undefined-route');
    expect(response.statusCode).toBe(404);
  });
});
