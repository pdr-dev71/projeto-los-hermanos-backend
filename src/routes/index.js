var router = require('express').Router();

router.use('/users', require('./user'))
router.use('/notices', require('./notices'))
router.use('/auth', require('./auth'))

router.use('/*', function (req, res) {
  res
    .status(404)
    .json({"error": "Rota não encontrada"})
});

module.exports = router;
