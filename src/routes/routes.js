import {Router} from 'express'
import TaskController from '../controllers/TaskController.js'

const router = Router()

router.post('/task',TaskController.store)
router.get('/tasks/:type', TaskController.showTasksbyType)
router.get('/task/:id', TaskController.showTaskById)
router.delete('/task/:id', TaskController.deleteTaskbyId)


export default router