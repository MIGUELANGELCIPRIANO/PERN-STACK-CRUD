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
	res.send('retrieve a task')
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

const updateTask = (req, res) => {
	res.send('update a task')
}

const deleteTask = (req, res) => {
	res.send('delete a task')
}

module.exports = {
	getAllTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
}
