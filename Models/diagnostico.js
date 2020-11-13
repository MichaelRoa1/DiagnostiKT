const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'Data', 'diagnostico.json');

/*const getusuarioStorage = cb => {
    conexion.query('SELECT * FROM caratula', function(err,rows, fields){
        if (err) throw err;

        cb(rows);
    });
}*/

module.exports = class diagnostico{
constructor (nombre, edad, sintomas, enfermedad, recomendaciones){
   
    this.nombre = nombre;
    this.edad = edad;
    this.sintomas = sintomas;
    this.enfermedad = enfermedad;
    this.recomendaciones = recomendaciones;
  

}

static getAll (cb){
        
    getdiagnosticoStorage(cb);
}


};