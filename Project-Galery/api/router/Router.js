const express = require('express');

const router = express.Router();
const GaleryModel = require('../ model/galery/GaleryModel');
const ResponseClass = require('../ model/ResponseClass');
const fs = require('fs');
let folderPublic = "./public/img/";

router.get("/", function(req, res, next) {
    GaleryModel.getAll(function(erro, back) {
        let response = new ResponseClass();
        if (erro) {
            response.erro = true;
            response.msg = "Opa!!! Ocorreu um erro.";
        } else {
            response.data = back;
        }
        res.json(response);
    });
});

router.get("/:id?", function(req, res, next) {
    GaleryModel.getId(req.params.id, function(erro, back) {
        let response = new ResponseClass();
        if (erro) {
            response.erro = true;
            response.msg = "Opa!!! Ocorreu um erro.";
        } else {
            response.data = back;
        }
        res.json(response);
    });
});


router.post("/?", function(req, res, next) {
    let response = new ResponseClass();
    //Verifica se receu a imagem
    if (req.body.data_image != null) {
        //Salvar a imagem
        let bitmap = new Buffer.from(req.body.data_image.imagem_base64, 'base64');

        let dataAtual = new Date().toLocaleString().replace(/\//g, '').replace(/:/g, '').replace(/-/g, '').replace(/ /g, '');
        let nameImagePath = folderPublic + dataAtual + req.body.data_image.nome_arquivo;
        fs.writeFileSync(nameImagePath, bitmap);
        req.body.caminho = nameImagePath;

        GaleryModel.add(req.body, function(erro, back) {


            if (erro) {
                response.erro = true;
                response.msg = "Opa!!! Ocorreu um erro.";
                console.log('erro', erro)
            } else {
                if (back.affectedRows > 0) {
                    response.msg = "Cadastro realizado com sucesso!!";
                } else {
                    response.erro = true
                    response.msg = "Opa!!! Não foi possível enviar a imagem.";
                    console.log('erro', erro)
                }
            }
            console.log('res', response);
            res.json(response);
        });
    } else {
        response.erro = true;
        response.msg = "Não foi possível enviar mensagem!";
        console.log('erro:', response.msg);
        res.json(response);
    }

});


module.exports = router;