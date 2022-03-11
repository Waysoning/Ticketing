import request from 'supertest';
import { app } from '../../app';

it('has a route handler listening to /api/tickets for requests', async () => {
  const response = await request(app).post('/api/tickets').send({});

  expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signen in', async () => {
  const response = await request(app).post('/api/tickets').send({});

  expect(response.status).toEqual(401);
});

it('returns a status rather than 401 if the user is signen in', async () => {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({});
  console.log(response.status);
  expect(response.status).not.toEqual(401);
});

it('returns an error if an invalid title is provided', async () => {});

it('returns an error if an invalid price is provided', async () => {});

it('creates a ticket with valid inputs', async () => {});
