var express = require('express');
var router = express.Router();

router.get('/:id', require('../../controllers/Users/get'))
router.post('/', require('../../controllers/Users/create'))

module.exports = router;