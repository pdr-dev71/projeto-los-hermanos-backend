const { Users } = require('../database/models')
const router = require('express').Router()

router.get('/:id', async (req, res)=>{
  const { id } = req.params
  try {
    const user = await Users.findOne({
      where: { email }
    })
    if(user){
      if(user.dataValues.password != password){
        return res.status(401).send('incorrect password')
      } else {
        return res.status(200).send('success')
      }
    } else {
      return res.status(404).send('user not found')
    }
  }
  catch(error){
    console.log(error)
    return res.status(500).json(error.message);
  }
})

module.exports = router