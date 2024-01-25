const { Router } = require('express')

const router = Router()

router.get('/tasks')
router.get('/tasks/:id')
router.post('/tasks')
router.put('/tasks')
router.delete('/tasks')

module.exports = router
