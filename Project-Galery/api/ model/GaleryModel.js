const db = require('../../db/dbConect')

class GaleryModel {
    static getAll(callback) {
        return db.query("SELECT * FROM galery", callback)
    }
}