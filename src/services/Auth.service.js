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
      console.error(error)
      throw error;
    }
  }
  async signin(email, password){
    try{

      const user = await this.model.findOne({
        where: { email },
        attributes: ['id', 'email', 'password', 'type'],
      })
      if (!user) {
        throw {message: 'User with email not found', code: 404}
      }
      const passwordIsValid = bcrypt.compareSync(password, user.dataValues.password)
      if (!passwordIsValid) {
        throw {message: 'password incorrect', code: 400}
      }
      const { id, type } = user.dataValues
      const token = this.genToken(id)
      return { token, userData: { email, id, type } }
    }
    catch(error){
      console.log(error)
      throw error;
    }
  }
  signout(){

module.exports = async (req, resp) => {
  const authorization = req.headers['authorization'].split(' ');
  const token = authorization[1];

  try {
    await Tokens.destroy({ where: { token } });

    return resp
      .status(200)
      .json(
        FUNCTIONS.objectReturn(
          'Success in signout',
          null,
          false,
          200,
        ),
      );
  } catch (error) {
    console.log(error);
    return resp
      .status(404)
      .json(
        FUNCTIONS.objectReturn('Token not found', null, true, 404),
      );
  }
};


  }
}
module.exports = AuthService