const { Router } = require('express')
const {
	getAllTasks,
	getTask,
	createTask,
	deleteTask,
	updateTask,
} = require('../controllers/tasks.controllers')

const router = Router()

router.get('/tasks', getAllTasks)

router.get('/tasks/:id', getTask)
router.post('/tasks', createTask)
router.put('/tasks', updateTask)
router.delete('/tasks', deleteTask)

module.exports = router
