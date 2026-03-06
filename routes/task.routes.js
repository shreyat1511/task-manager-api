const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/task.controller');

router.post('/', auth, createTask);
router.get('/', auth, getTasks);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, role('admin'), deleteTask); // admin only

module.exports = router;