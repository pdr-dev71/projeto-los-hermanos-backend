const app = require('./src/server');
const db = require('./src/database/models')


app.listen(PORT, () =>{
    console.log(`Server is running in port ${PORT}`)
});
  