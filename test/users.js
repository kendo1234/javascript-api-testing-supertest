import supertest from 'supertest'
import {expect} from 'chai';

const request = supertest('https://gorest.co.in/public-api/');
const TOKEN = '9afcb58d8a42730d11549f3b0d4f3ed07ca94f6c2a7faa76168833ddcc49bcf4'

describe('Users', () => {
    it('GET /users', () => {
    return request.get('users?access-token=${TOKEN}').then((res) => {
        expect(res.body.data).to.not.be.empty;
    });
});


    it('GET /users/:id', () => {
        return request.get('users/1?access-token=${TOKEN}').then((res) => {
            expect(res.body.data.id).to.be.eq(1);
            });
        });
    });

    it('GET /users/with query params', () => {

        const url = 'users/?access-token=${TOKEN}&page=5&gender=Female&status=Active'

        return request.get(url).then((res) => {
            expect(res.body.data).to.not.be.empty;
            res.body.data.forEach((data) => {
                expect(data.gender).to.eq('Female');
                expect(data.status).to.eq('Active');
            });
        });
    });

