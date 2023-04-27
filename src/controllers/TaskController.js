import {Task} from './../model/TaskModel.js'

class TaskController{

    store(request, response){
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
        Task.create(newTask)
        response.status(202).json({msg: "Task Criada com Sucesso"})
    }

    showAllTasks(){

    }

    showTaskById(){

    }

    showTasksbyType(){

    }

    deleteTaskbyId(){

    }

}

export default new TaskController()