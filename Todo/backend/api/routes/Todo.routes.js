const Express = require('express');
const router = Express.Router();
const todoController = require('../controllers/Todo.controller')

router.post('/createtodo', todoController.addTodo);
router.patch('/updatetodo', todoController.updateTodo);
router.get('/gettodo', todoController.getTodo);
router.delete('/deletetodo', todoController.deleteTodo);

module.exports = router;