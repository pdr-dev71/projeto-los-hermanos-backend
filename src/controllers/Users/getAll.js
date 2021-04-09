const {Users} = require('../../database/models')
module.exports = async () => {
	try {
		let users = await Users.findAll();
        users = users.map((user) => user.toJSON())
		return users;
	}
	catch(error){
		console.error(error);
		throw {message: 'Erro', code: 500}
	}
};