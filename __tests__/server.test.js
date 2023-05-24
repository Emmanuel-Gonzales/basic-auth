'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/auth/models/index');

const request = supertest(app);

beforeAll( async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('Auth Routes', (() => {
  test('test for user signup', async () => {
    const response = await request.post('/signup').send({
      username: 'ned',
      password: 'node101',
    });

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('ned');
  });

  test('allow for user signin', async () => {
    const response = await request.post('/signin').set('Authorization', 'Basic bmVkOm5vZGUxMDE=');

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('ned');
  });
}));