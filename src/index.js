import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import routes from './routes/routes.js'


const app = express()

app.use(cors({
    origin: '*',
    methods: '*'
}))

dotenv.config()

app.use(express.urlencoded({
    extended:true,
}),)

app.unsubscribe(express.json())

app.use(routes)
app.use((request, response) => {
    response.status(404).json({error: "Página não Encontrada."})
})

app.listen(process.env.PORT)