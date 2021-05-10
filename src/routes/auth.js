const { Users } = require('../database/models')
const router = require('express').Router()
const AuthService = require('../services/Auth.service')
const authService = new AuthService(Users)

const validate = require('../validators');
const userCreateValidation = require('../validators/Users/create');

router.post('/signup', async (req, res)=>{
  try {
    const data = req.body;
    const valid = await validate(userCreateValidation, data);
    if (valid){
      const EmailAlreadyInUse = await Users.findOne({where: {email: data.email}})
      if(EmailAlreadyInUse){
        return res.status(409).json({message: "Email already in use"});
      }
      return res.status(201).json(await authService.signup(data));
    } else return res.status(400).json({message: "Invalid data"});
  } catch (error) {
    console.error(error)
    return res.status(error.code).json(error.message);
  }
})

router.post('/signin', async (req, res)=>{
  try {
    const { email, password } = req.body
    const { token, userData } = await authService.signin(email, password)
    return res.status(200).json({ auth: true, user: userData, token: token })
  } catch (error) {
    console.error(error)
    return res.status(error.code).json({ auth: false, token: null, message: error.message })
  }
})

router.post('/signout', async (req, res)=>{
  //destroir o token do usuário
})

module.exports = router