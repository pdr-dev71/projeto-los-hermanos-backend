var express = require('express');
var router = express.Router();
const handlers = require('../controllers/Users');
const userCreateValidation = require('../validators/Users/create');
const userUpdateValidation = require('../validators/Users/update')
const validate = require('../validators');
const { Users } = require('../database/models')
const userServiceClass = require('../services/User.service')
const userService = new userServiceClass(Users)

router.get('/', async (req, res) => {
    try {
        return res.send(await userService.getAll())
        // return res.send(await handlers.getAll())
    } catch(error) {
        console.log(error)
        return res.status(error.code).json(error.message);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        return res.send(await userService.get(id))
        // return res.send(await handlers.get(id))
    } catch(error) {
        return res.status(error.code).json(error.message);
    }
    
})
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const valid = await validate(userCreateValidation, data);
        console.log(valid);
        if (valid) return res.status(201).json(await userService.create(data));
        // if (valid) return res.status(201).json(await handlers.create(data));
        else return res.status(400).json({message: "Invalid data"});
    } catch (error) {
        console.log(error)
        return res.status(error.code).json(error.message);
    }
})
router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const valid = await validate(userUpdateValidation, data);
        if (valid) return res.send(await userService.update(id, data));
        // if (valid) return res.send(await handlers.update(id, data));
        return res.status(400).json({message: "Invalid data"});
    } catch (error) {
         return res.status(error.code).json(error.message);
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        return res.send(await userService.delete(id));
        // return res.send(await handlers.delete(id));
    } catch(error) {
        return res.status(error.code).json(error.message);
    }
})

module.exports = router;