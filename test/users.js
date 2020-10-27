require('dotenv').config();
import request from '../config/supertest';
import {expect} from 'chai';

const TOKEN = process.env.USER_TOKEN;

describe('Users', () => {
    it('GET /users', () => {
    return request.get('users?access-token=${TOKEN}').then((res) => {
        expect(res.body.data).to.not.be.empty;
    });
});

    it('GET /users/:id', () => {
        return request.get('users/63?access-token=${TOKEN}').then((res) => {
            expect(res.body.data.id).to.be.eq(63);
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

    it('POST /users', () => {

        const data = {
            email: `test${Math.floor(Math.random() * 999999)}@mail.ca`,
            name: 'Ttest',
            gender: 'Male',
            status: 'Inactive',
        };

        return request
        .post('users')
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(data)
        .then((res) => {
            expect(res.body.data).to.deep.include(data);
        });
    });

    it('PUT /users/:id', () => {
        const data = {
          status: 'Active',
          name: `Luffy - ${Math.floor(Math.random() * 9999)}`,
        };
    
        return request
          .put('users/132')
          .set('Authorization', `Bearer ${TOKEN}`)
          .send(data)
          .then((res) => {
            console.log(res.body);
            expect(res.body.data).to.deep.include(data);
          });
      });
    
      it('DELETE /users/:id', () => {
        return request
          .delete('users/21')
          .set('Authorization', `Bearer ${TOKEN}`)
          .then((res) => {
            console.log(res.body);
            expect(res.body.data).to.be.eq(null);
          });
      });
    

