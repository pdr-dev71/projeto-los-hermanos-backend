var router = require('express').Router();

router.use('/users', require('./user'))
router.use('/session', require('./session'))

router.use('/*', function (req, res) {
  res
    .status(404)
    .json({"error": "Rota não encontrada"})
});

module.exports = router;
