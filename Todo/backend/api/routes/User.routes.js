const Express = require('express');
const router = Express.Router();
const userController = require('../controllers/User.controller');


router.post('/register', userController.registerUser);

module.exports = router;