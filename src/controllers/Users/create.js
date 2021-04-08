const User = require('../../database/models/User')
module.exports = async (req, resp) => {
  const body = req.body
  const { email, password, name } = body;
  //validar valores
  const createData = {
    email,
    password,
    name,
    rule: 'USER'
  }
  try {
    const user = await User.create(createData)
    if(user) resp.json({
      user: user.dataValues.id,
      message: 'sucesso ao criar user'
    })
  }
  catch(err){
    resp.send({
      err,
      message: 'erro ao cadastrar usuário'
    })
  }
	resp.json({email, password})
};
