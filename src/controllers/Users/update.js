const {Users} = require('../../database/models/')

module.exports = async (id, data) => {
    try {
        const [result] = await Users.update(data, {where: {id: id}})
        console.log(result);
        if (result > 0) {
            const user = await Users.findByPk(id);
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