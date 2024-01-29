const pool = require('../db')

const getAllTasks = async (req, res, next) => {
	try {
		const allTasks = await pool.query('SELECT * FROM task')
		res.status(200).json(allTasks.rows)
	} catch (error) {
		next(error)
	}
}

const getTask = async (req, res, next) => {
	try {
		const { id } = req.params
		const task = await pool.query('SELECT * FROM task WHERE id=$1', [id])
		return task.rows.length === 0
			? res.status(404).json({ message: 'Task not found' })
			: res.status(200).json(task.rows[0])
	} catch (error) {
		next(error)
	}
}

const createTask = async (req, res, next) => {
	const { title, description } = req.body
	try {
		const newTask = await pool.query(
			'INSERT INTO task(title, description) VALUES ($1, $2)',
			[title, description]
		)
		res.status(200).json(newTask.rows[0])
	} catch (error) {
		next(error)
	}
}

const updateTask = async (req, res, next) => {
	try {
		const { id } = req.params
		const { title, description } = req.body
		const task = await pool.query(
			'UPDATE task SET title=$1, description=$2 WHERE id=$3 RETURNING *',
			[title, description, id]
		)
		return task.rows.length === 0
			? res.status(404).json({ message: 'Task not found' })
			: res.status(200).json(task.rows[0])
	} catch (error) {
		next(error)
	}
}

const deleteTask = async (req, res, next) => {
	try {
		const { id } = req.params
		const task = await pool.query('DELETE FROM task WHERE id=$1', [id])
		return task.rows.length === 0
			? res.status(404).json({ message: 'Task not found' })
			: res.status(204).json({ message: 'Task successfully removed' })
	} catch (error) {
		next(error)
	}
}

module.exports = {
	getAllTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
}
