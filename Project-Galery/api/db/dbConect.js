const mysql = require('mysql')

const conexao = mysql.createPool({
    host: 'localhost',
    user: 'edudev',
    password: 'root',
    database: 'galery_angular'
})