const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const api = express()
const port = 3000
const router = express.Router()

api.use(cors())

api.use(bodyparser.urlencoded({
    extended: true
}))
api.use(bodyparser.json({
    limit: '20m',
    extended: true
}))

router.get("/", (req, res) => res.json({
    menssage: 'Api Conectada!!!'
}))

api.use('/', router)

api.listen(port)

console.log("Api Runing!!!")