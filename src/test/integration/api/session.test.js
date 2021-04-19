const request = require('supertest')
require('dotenv-flow').config()
const app = require('../../../app')
const sequelize = require('../../../database/models')

const newUser = {
  firstName: "John",
  lastName: "Doe",
  password: "testpassword",
  birthDate: "01/01/2021",
  phone: "0000000000",
  email: "test@test.com",
  type: "user"
}

const API_SESSION = '/session'

beforeAll(async () => {
  await sequelize.sequelize.sync({ force: true })
  await request(app).post('/users').send(newUser);
})

afterAll(async () => {
  await sequelize.sequelize.close()
})

describe("Authentication", ()=>{
  test('should authenticated with valid credential', async()=>{
    const user = {
      email: "test@test.com",
      password: "testpassword",
    }
    const response = await request(app).post(API_SESSION).send(user)
    expect(response.statusCode).toBe(200)
  })
  test('should fail because user with email not found', async()=>{
    const user = {
      email: "test@test.com.br",
      password: "testpassword",
    }
    const response = await request(app).post(API_SESSION).send(user)
    expect(response.statusCode).toBe(404)
  })
  test('should fail because credential it is invalid', async()=>{
    const user = {
      email: "test@test.com",
      password: "testpassword123",
    }
    const response = await request(app).post(API_SESSION).send(user)
    expect(response.statusCode).toBe(401)
  })
})