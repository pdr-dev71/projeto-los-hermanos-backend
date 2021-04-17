var express = require('express');
var router = express.Router();
const userCreateValidation = require('../validators/Users/create');
const userUpdateValidation = require('../validators/Users/update')
const validate = require('../validators');
const { Users } = require('../database/models')
const UserService = require('../services/User.service')
const userService = new UserService(Users)

router.get('/', async (req, res) => {
    try {
        return res.send(await userService.getAll())
    } catch(error) {
        console.log(error)
        return res.status(error.code).json(error.message);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        return res.send(await userService.get(id))
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
        return res.status(400).json({message: "Invalid data"});
    } catch (error) {
         return res.status(error.code).json(error.message);
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        return res.send(await userService.delete(id));
    } catch(error) {
        return res.status(error.code).json(error.message);
    }
})

module.exports = router;