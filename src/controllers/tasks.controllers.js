const pool = require('../db')

const getAllTasks = async (req, res) => {
	try {
		const allTasks = await pool.query('SELECT * FROM task')
		res.status(200).json(allTasks.rows)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const getTask = async (req, res) => {
	try {
		const { id } = req.params
		const task = await pool.query('SELECT * FROM task WHERE id=$1', [id])
		return task.rows.length === 0
			? res.status(404).json({ message: 'Task not found' })
			: res.status(200).json(task.rows[0])
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const createTask = async (req, res) => {
	const { title, description } = req.body
	try {
		const newTask = await pool.query(
			'INSERT INTO task(title, description) VALUES ($1, $2) RETURNING *',
			[title, description]
		)
		res.status(200).json(newTask.rows[0])
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const updateTask = async (req, res) => {
	res.send('update a task')
}

const deleteTask = async (req, res) => {
	res.send('delete a task')
}

module.exports = {
	getAllTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
}
