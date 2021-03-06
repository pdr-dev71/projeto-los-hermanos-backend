class NoticeService {
  constructor(model){
    this.Model = model
  }
  async get(id){
    try {
      const notice = await this.Model.findByPk(id);
      if(notice) {
        return notice.toJSON();
      } else {
        throw {message: 'Notícia não encontrada', code: 404}
      }
    }
    catch(error){
      console.error(error);
      if (error.code) throw error
      throw {message: 'Erro', code: 500}
    }
  }
  async getByUser(userId){
    try {
      let notices = await this.Model.findAll({
        where: { userId }
      });
      notices = notices.map((notice) => notice.toJSON())
      return notices;
    }
    catch(error){
      console.error(error);
      throw {message: error.message, code: 500}
    }
  }
  async getAll(){
    try {
      let notices = await this.Model.findAll();
      notices = notices.map((notice) => notice.toJSON())
      return notices;
    }
    catch(error){
      console.error(error);
      throw {message: error.message, code: 500}
    }
  }
  async create(noticeData){
    try {
      const notice = await this.Model.create(noticeData)
      return { id: notice.dataValues.id }
    }
    catch(err){
      if (err.code) throw err;
      throw { message: 'Erro', code: 500 }
    }
  }
  async update(id, data){
    try {
      const result = await this.Model.update(data, {where: { id }})
      if (result) {
          const notice = await this.Model.findByPk(id);
          return notice;
      } else {
          throw {message: "Notícia não encontrado", code: 404}
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
      if (result > 0) return {message: "Notícia foi deletada"};
      else throw {message: "Notícia não encontrada", code: 404}
    } catch (error) {
      console.error(error);
      if (error.code) throw error;
      throw {message: "Erro", code: 500};
    }
  }
}
module.exports = NoticeService;