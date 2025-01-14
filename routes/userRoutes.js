const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

router.post('/register', userController.RegisterUser);
router.post('/login', userController.LoginUser);
router.get('/logout', authMiddleware, userController.logout);


module.exports = router;