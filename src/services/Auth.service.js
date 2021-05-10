const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const salt = 8
class AuthService {
  constructor(model){
    this.model = model
  }
  genToken (user) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    return token
  }
  async signup(userData){
    try {
      const {password} = userData
      userData.password = bcrypt.hashSync(password, salt)
      const newUser = await this.model.create(userData)
      return {id: newUser.dataValues.id}
    }
    catch (error) {
      console.log(error)
      throw error;
    }
  }
  async signin(email, password){
    try{

      const user = await this.model.findOne({
        where: { email },
        attributes: ['id', 'email', 'password'],
      })
      if (!user) {
        throw {message: 'User with email not found', code: 404}
      }
      const passwordIsValid = bcrypt.compareSync(password, user.dataValues.password)
      if (!passwordIsValid) {
        throw {message: 'password incorrect', code: 400}
      }
      const token = this.genToken(user.dataValues)
      const { id } = user.dataValues
      return { token, userData: { email, id } }
    }
    catch(error){
      console.log(error)
      throw error;
    }
  }
  signout(){}
}
module.exports = AuthService