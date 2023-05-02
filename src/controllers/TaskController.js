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
        console.log('bateuaqui')
    }

    async showTasksbyType(request, response){
        const type = request.params.type
        console.log(`o type é ${type}`)
        const list = await Task.findAll({where: {type: type}})
        response.status(200).json(list)
    }

    showTaskById(){
        
    }

   

    deleteTaskbyId(){

    }

}

export default new TaskController()