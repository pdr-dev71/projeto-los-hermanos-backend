const Sequelize = require('sequelize')

class User extends Sequelize.Model {
	static init(sequelize){
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password: Sequelize.STRING,
				rule: Sequelize.ENUM('ADMIN', 'USER')
			}, {
				sequelize
			}
		)
		return this
	}
}
module.exports = User