const request = require('supertest')
require('dotenv-flow').config()
const app = require('../../../app')
const sequelize = require('../../../database/models')

const API_NOTICE = '/notices'

const newUser = {
  firstName: "John",
  lastName: "Doe",
  password: "testpassword",
  birthDate: "01/01/2021",
  phone: "0000000000",
  email: "test@test.com",
  type: "user"
}

beforeAll(async ()=>{
  await sequelize.sequelize.sync({ force:true })
  await request(app).post('/users').send(newUser);
})
afterAll(async ()=>{
  await sequelize.sequelize.close()
})
describe('Test the crud from posts', ()=>{
  test('It have register a new post by user', async()=>{
    const allUsers = await(await request(app).get('/users')).body;
    const userId = allUsers[0].id;
    const newNotice = {
      userId,
      title: 'Refeitario imterditado', //errei de propósito não fique com raiva
      description: 'refeitório está interditado para pintura das paredes e manutenção dos ar condicionados'
    }
    const response = await request(app).post(API_NOTICE).send(newNotice);
    expect(response.statusCode).toBe(201)
  })
  test('It have get all notices', async () => {
    const response = await request(app).get(API_NOTICE)
    const notices = response.body
    expect(response.statusCode).toBe(200)
    expect(notices.length).toBe(1) 
  })
  test('It have get one especific notice', async () => {
    const getNoticeId = 1
    const response = await request(app).get(`${API_NOTICE}/${getNoticeId}`)
    expect(response.statusCode).toBe(200)
  })
  test('It have update one especific notice', async () => {
    const getNoticeId = 1
    const updateBody = {
      title: 'Refeitório Interditado'
    }
    const response = await request(app).put(`${API_NOTICE}/${getNoticeId}`).send(updateBody)
    expect(response.statusCode).toBe(200)
  })
  test('It have delete one especific notice', async () => {
    const getNoticeId = 1
    const response = await request(app).delete(`${API_NOTICE}/${getNoticeId}`)
    expect(response.statusCode).toBe(200)
  })
})