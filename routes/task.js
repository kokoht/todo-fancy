var express = require('express')
var router = express.Router();
var controller = require('../controller/taskController')

// find all
router.get('/', controller.findAllTask)

//find one
router.get('/:id', controller.findByIdTask)

//update
router.put('/:id', controller.editByIdTask)

// delete
router.delete('/:id', controller.deleteByIdTask)

// create/insert/add
router.post('/', controller.createTask)

// add tag
router.post('/tags/:id', controller.addByIdTag)

module.exports = router
