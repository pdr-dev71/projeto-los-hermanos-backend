const request = require('supertest');
require('dotenv-flow').config()
const app = require('../../../app')
const sequelize = require('../../../database/models');

const API_USERS = "/users";

const DEFAULT_USER = {
    firstName: "John",
    lastName: "Doe",
    password: "testpassword",
    birthDate: "01/01/2021",
    phone: "0000000000",
    email: "email@test.com",
    type: "user"
}

beforeAll(async () => {
    await sequelize.sequelize.sync({force: true});
    await request(app).post(API_USERS).send(DEFAULT_USER);
});

afterAll(async () => {
    await sequelize.sequelize.close();
});

describe('Test the Users path', () => {
    test('it should add new user', async () => {
        const newUser = {
            firstName: "Test",
            lastName: "User",
            password: "testpassword",
            birthDate: "01/01/2021",
            phone: "0000000000",
            email: "test@test.com",
            type: "user"
        }
        const response = await request(app).post(API_USERS).send(newUser);
        expect(response.statusCode).toBe(201)
    });

    test('it should fail if new user data is invalid', async () => {
        const newUser = {
            firstName: "Test",
            lastName: "User",
            password: "testpassword",
            birthDate: "01/01/2021",
            phone: "0000000000",
            email: "test",
            type: "user"
        }
        const response = await request(app).post(API_USERS).send(newUser);
        expect(response.statusCode).toBe(400)
    });

    test('it should get all users', async () => {
        const response = await request(app).get(API_USERS);
        const users = response.body;
        expect(response.statusCode).toBe(200);
        expect(users.length).toBe(2);
    });

    test('it should get one user alone', async () => {
        const allUsers = await (await request(app).get(API_USERS)).body;
        const getUserId = allUsers[0].id;
        const response = await request(app).get(`${API_USERS}/${getUserId}`);
        const user = response.body;
        expect(response.statusCode).toBe(200);
        expect(user.id).toBe(getUserId)
    });

    test('it should fail to get one user with invalid id', async () => {
        const getUserId = 99;
        const response = await request(app).get(`${API_USERS}/${getUserId}`);
        expect(response.statusCode).toBe(404);
    });

    test('it should update user successfully', async () => {
        let allUsers = await (await request(app).get(API_USERS)).body;
        const updateUserId = allUsers[0].id;
        const response = await request(app).put(`${API_USERS}/${updateUserId}`).send({firstName: "Test"});
        expect(response.statusCode).toBe(200);
        allUsers = await (await request(app).get(API_USERS)).body;
        const newUser = allUsers.find((user) => user.id === updateUserId);
        expect(newUser.firstName).toBe("Test");
        
    })

    test('it should fail if updating invalid user', async () => {
        const response = await request(app).put(`${API_USERS}/99`).send({firstName: "Test"});
        expect(response.statusCode).toBe(404);
        
    });

    test('it should delete user successfully', async () => {
        let allUsers = await (await request(app).get(API_USERS)).body;
        const deleteUserId = allUsers[0].id;
        const response = await request(app).delete(`${API_USERS}/${deleteUserId}`);
        expect(response.statusCode).toBe(200);
        allUsers = await (await request(app).get(API_USERS)).body;
        expect(allUsers.length).toBe(1);
    })

    test('it should fail to delete user with invalid id', async () => {
        const response = await request(app).delete(`${API_USERS}/99`);
        expect(response.statusCode).toBe(404);
    })

});