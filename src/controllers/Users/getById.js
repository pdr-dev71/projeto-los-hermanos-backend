const {Users} = require('../../database/models')
module.exports = async (id) => {
	try {
		const user = await Users.findByPk(id);
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
};
