const {Users} = require('../../database/models/')

module.exports = async (id) => {
    try {
        const result = await Users.destroy({
            where: {
                id: id
            }
        })
        if (result > 0) return {message: "Usuário foi deletado"};
        else throw {message: "Usuário não encontrado", code: 404}
    } catch (error) {
        console.error(error);
        if (error.code) throw error;
        throw {message: "Erro", code: 500};
    }
}