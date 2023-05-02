import {Task} from './../model/TaskModel.js'

class TaskController{

    async store(request, response){
        console.log(request.body)
        const {title, body, type , date} = request.body
        if(!title || !body || !type){
            response.status(404).json({msg: "Dados Faltando"})
            return
        }
        const newTask = {
            title: title,
            body: body,
            type: type,
            date: date
        }
        await Task.create(newTask)
        response.status(202).json({msg: "Task Criada com Sucesso"})
    }

    async showTasksbyType(request, response){
        const type = request.params.type
        const list = await Task.findAll({where: {type: type}})
        response.status(200).json(list)
    }

    deleteTaskbyId(request, response){
        const id = request.params.id
        Task.destroy({where: {id: id}})
    }

    async showTaskById(request, response){
        const id = request.params.id
        const task = await Task.findAll({where: {id: id}})
        response.status(200).json(task[0])
        console.log(task[0])
    }

   



}

export default new TaskController()