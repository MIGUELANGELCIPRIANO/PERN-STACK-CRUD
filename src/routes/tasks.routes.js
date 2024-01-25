const { Router } = require('express')
const pool = require('../db')

const router = Router()

router.get('/tasks', async (req, res) => {
	const result = await pool.query('SELECT NOW()')
	console.log(result)
	res.json(result.rows[0].now)
})

router.get('/tasks/:id')
router.post('/tasks')
router.put('/tasks')
router.delete('/tasks')

module.exports = router
