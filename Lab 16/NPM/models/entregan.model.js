const db = require('../util/database');
 
 module.exports = class Entrega {
     //Este método servirá para devolver los objetos del almacenamiento persistente.
     static fetchAll() {
         return db.execute('SELECT * FROM entregan');
     }
     static find(valor) {
        return db.execute(`
            SELECT * 
            FROM entregan
            WHERE rfc LIKE ?`, 
            [valor + '%']);
    }
 
 
 
 }