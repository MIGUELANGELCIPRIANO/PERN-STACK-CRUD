const getAllTasks = async (req, res) => {
    res.send('retrieve all tasks')
}

const getTask = async (req, res) => {
    res.send('retrieve a task')
}

const createTask = (req, res) => {
    res.send('create a task')
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
