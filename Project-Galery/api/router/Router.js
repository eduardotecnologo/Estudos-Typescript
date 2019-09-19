const express = require('express')

const router = express.Router()
const GaleryModel = require('../ model/galery/GaleryModel')
const ResponseClass = require('../ model/ResponseClass')

router.get("/", function(req, res, next) {
    GaleryModel.getAll(function(erro, back) {
        let response = new ResponseClass()
        if (erro) {
            response.erro = true
            response.msg = "Opa!!! Ocorreu um erro."
        } else {
            response.data = back
        }
        res.json(response)
    })
})

router.get("/:id?", function(req, res, next) {
    GaleryModel.getId(req.params.id, function(erro, back) {
        let response = new ResponseClass()
        if (erro) {
            response.erro = true
            response.msg = "Opa!!! Ocorreu um erro."
        } else {
            response.data = back
        }
        res.json(response)
    })
})


module.exports = router