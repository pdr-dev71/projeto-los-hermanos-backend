const request = require('supertest');
require('dotenv').config({path: '../../../.test.env'})
const config = require('../../../database/config/config');
const app = require('../../../server')

describe('test the API base path', () => {
    test('it should respond to the GET request', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    })
})