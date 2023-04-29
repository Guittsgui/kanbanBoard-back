import {Router} from 'express'
import TaskController from '../controllers/TaskController.js'

const router = Router()

router.get('/', TaskController.showAllTasks)
router.post('/task',TaskController.store)
router.get('/task/:id', TaskController.showTaskById)
router.get('/task/:type', TaskController.showTasksbyType)
router.delete('/task/:id', TaskController.deleteTaskbyId)


export default router