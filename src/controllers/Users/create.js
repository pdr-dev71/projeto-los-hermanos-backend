const {Users} = require('../../database/models/')
module.exports = async (userData) => {
  try {
    const user = await Users.create(userData)
    if(user) return user.id
    else throw {message: 'Houve um erro ao salvar no banco de dados', code: 500}
  }
  catch(err){
    console.log(err)
    if (err.code) throw err;
    throw {message: 'Erro', code: 500}
  }
};
