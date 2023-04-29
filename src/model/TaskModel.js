import {sequelize} from '../instances/mysql.js'
import { DataTypes } from 'sequelize'

export const Task = sequelize.define("Task",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        required: true
    },
    title:{
        type: DataTypes.STRING,
        required: true
    },
    body:{
        type: DataTypes.STRING,
        required: true
    },
    date: {
        type: DataTypes.DATE,
        required:true
    },
    type:{
        type: DataTypes.STRING,
        required:true
    }    

},{
    tableName: "task",
    timestamps: false
})