const getHandler = require('./getById');
const getAllHandler = require('./getAll');
const createHandler = require('./create');
const updateHandler = require('./update');
const deleteHandler = require('./delete');

module.exports = {
    getAll: getAllHandler,
    get: getHandler,
    create: createHandler,
    update: updateHandler,
    delete: deleteHandler
}