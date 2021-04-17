const { Users } = require('../database/models')
const router = require('express').Router()

router.post('/', async (req, res)=>{
  return res.status(200).send('seila')
  // try {
  //   const user = await Users.findOne({
  //     where: {email: req.email}
  //   })
  //   if(user){
  //     return res.status(200).send('success')
  //   } else {
  //     return res.status(404).send('not found')
  //   }
  // }
  // catch(error){
  //   console.log(error)
  //   return res.status(500).json(error.message);
  // }
})

module.exports = router