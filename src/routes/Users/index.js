var express = require('express');
var router = express.Router();

router.get('/:id', require('../../controllers/Users/get'))
router.post('/', require('../../controllers/Users/create'))
router.put('/:id', require('../../controllers/Users/update'));
router.delete('/:id', require('../../controllers/Users/delete'))

module.exports = router;