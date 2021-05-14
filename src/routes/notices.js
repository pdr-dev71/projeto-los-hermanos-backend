const { Notices, Users } = require('../database/models')
const router = require('express').Router()
const NoticeService = require('../services/Notice.service')
const noticeService = new NoticeService(Notices)

router.get('/', async (req, res) => {
  try {
    return res.send(await noticeService.getAll())
  } catch(error) {
    console.error(error)
    return res.status(error.code).json(error.message);
  }
})
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    return res.send(await noticeService.get(id))
  } catch(error) {
    console.log(error)
    return res.status(error.code).json(error.message);
  }
})
router.post('/', async (req, res) => {
  const { userId } = req.body
  const user = await Users.findByPk(userId)
  if(!user) return res.status(404).send('user not found')
  try {
    return res.json(await noticeService.create(req.body));
  }
  catch(error){
    console.error(error)
    return res.status(error.code).json(error.message);
  }
})
router.put('/:id', async (req, res)=>{
  try {
    const { id } = req.params;
    const data = req.body;
    return res.send(await noticeService.update(id, data));
  } catch (error) {
    return res.status(error.code).json(error.message);
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    return res.send(await noticeService.delete(id));
  } catch(error) {
    return res.status(error.code).json(error.message);
  }
})

module.exports = router