const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');


/* GET users listing. */
 router.get('/:id', userController.getUser);

module.exports = router;
