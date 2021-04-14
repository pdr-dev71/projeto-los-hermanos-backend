const request = require('supertest');
require('dotenv-flow').config()

const config = require('../../../database/config');
const app = require('../../../app')

describe('test the API base path', () => {
    test('it should respond to the GET request', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    })
})