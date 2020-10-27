import environmentconfig from './environmentconfig';
const supertest = require('supertest');
const request = supertest(environmentconfig.baseUrl);

export default request;