import supertest from 'supertest'
import {expect} from 'chai';

const request = supertest('https://gorest.co.in/public-api/');
const TOKEN = '9afcb58d8a42730d11549f3b0d4f3ed07ca94f6c2a7faa76168833ddcc49bcf4'

describe('Users', () => {
    it('GET /users', () => {
        request.get('users?access-token=${TOKEN}').end((err, res) => {
            // expect(res.body.data).to.not.be.empty;
            // failiure scenario
            expect(res.body.data).to.be.empty;
            done();
            });
    
    });
})

