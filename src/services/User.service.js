class UserService {
  constructor(model){
    this.Model = model
  }
  async get(id){
    try {
      const user = await this.Model.findByPk(id);
      if(user) {
        return user.toJSON();
      } else {
        throw {message: 'Usuário não encontrado', code: 404}
      }
    }
    catch(error){
      console.error(error);
      if (error.code) throw error
      throw {message: 'Erro', code: 500}
    }
  }
  async getAll(){
    try {
      let users = await this.Model.findAll();
          users = users.map((user) => user.toJSON())
      return users;
    }
    catch(error){
      console.error(error);
      throw {message: 'Erro', code: 500}
    }
  }
  async create(userData){
    try {
      const user = await this.Model.create(userData)
      if(user) return user.dataValues.id
      else throw {message: 'Houve um erro ao salvar no banco de dados', code: 500}
    }
    catch(err){
      console.log(err)
      if (err.code) throw err;
      throw {message: 'Erro', code: 500}
    }
  }
  async update(id, data){
    try {
      const [result] = await this.Model.update(data, {where: { id }})
      if (result > 0) {
          const user = await this.Model.findByPk(id);
          return user;
      } else {
          throw {message: "Usuário não encontrado", code: 404}
      }
    } catch (error) {
        console.log(error);
        if (error.code) throw error;
        throw {message: error, code: 500}
    }
  }
  async delete(id){
    try {
      const result = await this.Model.destroy({
          where: { id }
      })
      if (result > 0) return {message: "Usuário foi deletado"};
      else throw {message: "Usuário não encontrado", code: 404}
    } catch (error) {
      console.error(error);
      if (error.code) throw error;
      throw {message: "Erro", code: 500};
    }
  }
}
module.exports = UserService;