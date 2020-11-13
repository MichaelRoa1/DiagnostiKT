const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'Data', 'consulta.json');

/*const getusuarioStorage = cb => {
    conexion.query('SELECT * FROM caratula', function(err,rows, fields){
        if (err) throw err;

        cb(rows);
    });
}*/

module.exports = class consulta{
constructor (nombre, edad, sintomas, alergias){
   
    this.nombre = nombre;
    this.edad = edad;
    this.sintomas = sintomas;
    this.alergias = alergias;
  

}

static getAll (cb){
        
    getconsultaStorage(cb);
}


};