const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// router.post('/createCustomer', userController);
router.post('/getAll', userController.getAll);
router.post('/getNearUser', userController.getNearestUser);


module.exports = router;
