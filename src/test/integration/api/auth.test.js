const request = require('supertest')
require('dotenv-flow').config()
const app = require('../../../app')
const sequelize = require('../../../database/models')

beforeAll(async () => {
  await sequelize.sequelize.sync({ force: true })
})

afterAll(async () => {
  await sequelize.sequelize.close()
})

describe("Authentication", ()=>{
  test('it should add new user', async () => {
    const newUser = {
        firstName: "Test",
        lastName: "User",
        password: "testpassword",
        birthDate: "01/01/2021",
        phone: "0000000000",
        email: "test@gmail.com",
        type: "user"
    }
    const response = await request(app).post('/auth/signup').send(newUser);
    expect(response.statusCode).toBe(201)
  });
  test('it should fail if new user data is invalid', async () => {
    const newUser = {
        firstName: "Test",
        lastName: "User",
        password: "testpassword",
        birthDate: "01/01/2021",
        phone: "0000000000",
        email: "",
        type: "user"
    }
    const response = await request(app).post('/auth/signup').send(newUser);
    expect(response.statusCode).toBe(400)
  });
  test('should authenticated with valid credential', async()=>{
    const user = {
      email: "test@gmail.com",
      password: "testpassword",
    }
    const response = await request(app).post('/auth/signin').send(user)
    expect(response.statusCode).toBe(200)
  })
  test('should fail because user with email not found', async()=>{
    const user = {
      email: "test@test.com",
      password: "testpassword",
    }
    const response = await request(app).post('/auth/signin').send(user)
    expect(response.statusCode).toBe(404)
  })
  test('should fail because credential it is invalid', async()=>{
    const user = {
      email: "test@gmail.com",
      password: "testpassword123",
    }
    const response = await request(app).post('/auth/signin').send(user)
    expect(response.statusCode).toBe(400)
  })
})