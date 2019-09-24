const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const api = express()
const port = 3000
const router = express.Router()

const Router = require('./router/Router')



api.use(cors())

api.use(bodyparser.urlencoded({
    limit: '10mb',
    extended: true
}))
api.use(bodyparser.json({
    limit: '10mb',
    extended: true
}))

//Diretório Público
api.use('/public', express.static(__dirname + '/public'))

router.get("/", (req, res) => res.json({
    message: 'Api Conectada manolo!!!'
}))

api.use('/', router)
api.use('/galery', Router)

api.listen(port)

console.log("Api Runing!!!")