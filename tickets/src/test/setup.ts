import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';

declare global {
  var signin: () => Promise<string[]>;
}

let mongo: MongoMemoryServer;
beforeAll(async () => {
  process.env.JWT_KEY = 'qwer';

  mongo = new MongoMemoryServer();
  await mongo.start();
  const mongoUri = mongo.getUri();

  // await mongoose.connect(mongoUri, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = async () => {
  const email = 'test@test.com';
  const password = 'password';

  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email,
      password,
    })
    .expect(201);

  // extract cookie
  const cookie = response.get('Set-Cookie');

  return cookie;
};
