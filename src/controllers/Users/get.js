const User = require('../../database/models/User')
module.exports = async (req, resp) => {
  const { id } = req.params
	try {
		const user = await User.findByPk(id)
		if(user) {
			resp.json({
				user: user.dataValues,
				message: 'sucess',
			})
		}
	}
	catch(error){
		resp.send('erro na busca de usuário')
	}
};
