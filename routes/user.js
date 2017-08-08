var express = require('express')
var router = express.Router();
var controller = require('../controller/userController')

// router.get('/signin', controller.signin)
// router.get('/signup', controller.signup)
router.get('/:id', controller.getByIdTask)
router.put('/:id', controller.addTask)
router.delete('/:id/:idt', controller.deleteTask)

module.exports = router
