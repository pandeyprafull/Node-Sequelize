const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');


/* GET users listing. */

 router.get('/each/:id', userController.getUser);

 router.get('/mobile', userController.getMobile);

 router.post('/login_number', userController.postLogin_Number);





module.exports = router;
