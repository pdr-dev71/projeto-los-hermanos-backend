const PORT = process.env.PORT || 3000
const app = require('./src/app');
const { sequelize } = require('./src/database/models')
sequelize.sync()

app.listen(PORT, () =>{
    console.log(`Server is running in port ${PORT}`)
});
  