const request = require('supertest')
require('dotenv-flow').config()
const app = require('../../../app')
const sequelize = require('../../../database/models')

const DEFAULT_USER = {
  firstName: "John",
  lastName: "Doe",
  password: "testpassword",
  birthDate: "01/01/2021",
  phone: "0000000000",
  email: "email@test.com",
  type: "user"
}

const API_SESSION = '/session'

beforeAll(async () => {
  await sequelize.sequelize.sync({ force: true })
  // await request(app).post('/users').send(DEFAULT_USER);
})

afterAll(async () => {
  await sequelize.sequelize.close()
})

describe("Authentication", ()=>{
  test('should authenticated with valid credential', async()=>{
    const user = {
      email: "email@test.com",
      password: "testpassword",
    }
    const response = await request(app).post(API_SESSION).send(user)
    expect(response.statusCode).toBe(200)
  })
})