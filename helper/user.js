const supertest = require('supertest');
const request = supertest('https://gorest.co.in/public-api/');
const faker = require('faker');

const TOKEN = '9afcb58d8a42730d11549f3b0d4f3ed07ca94f6c2a7faa76168833ddcc49bcf4'

export const createRandomUserWithFaker = async () => {
  const data = {
    email: faker.internet.email(),
    name: faker.name.firstName(),
    status: 'Active',
    gender: 'Male',
  };

  const res = await request
    .post(`users`)
    .set('Authorization', `Bearer ${TOKEN}`)
    .send(data);

  return res.body.data;
};

export const createRandomUser = async () => {
  const data = {
    email: 'dameronP' + Math.floor(Math.random() * 99999) + '@mail.ca',
    name: 'Poe',
    status: 'Active',
    gender: 'Male',
  };
  const res = await request
    .post(`users`)
    .set('Authorization', `Bearer ${TOKEN}`)
    .send(data);
  return res.body.data;
};