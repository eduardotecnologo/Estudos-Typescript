const db = require('../../db/dbConect')

module.exports = class GaleryModel {
    static getAll(cb) {
        return db.query("SELECT * FROM galery", cb)
    }

    static getId(id, cb) {
        return db.query("SELECT * FROM galery WHERE id_galery = ?", [id], cb)
    }

    static add(data, cb) {
        return db.query("INSERT INTO galery (titulo, caminho) VALUES(?, ?)", [data.titulo, data.caminho], cb);
    }
}