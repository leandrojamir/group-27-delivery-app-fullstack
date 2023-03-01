const { Router } = require('express');
const userController = require('../controllers/user.controller');

const router = Router();

router.post('/login', userController.login);
router.post('/register', userController.createUser);

module.exports = router;