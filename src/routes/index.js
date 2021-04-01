var express = require('express');
var router = express.Router();


router.use('/users', require('./Users'))


router.use('/*', function (req, res) {
  res
    .status(404)
    .json({"error": "Rota não encontrada"})
});

module.exports = router;
