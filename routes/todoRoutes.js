const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todosController');
const authMiddleware = require('../middleware/auth');



router.post('/create',authMiddleware, todoController.createTodo);
router.get('/', todoController.getTodos);
router.get('/:id', todoController.getTodo);
router.put('/:id/update', todoController.updateTodo);
router.delete('/:id/delete', todoController.deleteTodo);



module.exports = router;