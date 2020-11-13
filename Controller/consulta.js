const consulta = require('../models/consulta');

var controller = {

    getPacientes: function(req,res){
        consulta.getAll(consulta => {
            res.render('/',{
                concentrado: paciente,
                pageTitle:'',
                path:'/consulta'
            });
        });
    },

    buscar: function(req,res){



    },

    guardar: function(req,res){
        
        var nombre = req.body.nombre;
        var edad = req.body.edad;
        var sintomas = req.body.sintomas;
        var alergias = req.body.alergias;
      

        var consulta = new consulta (nombre, edad, sintomas, alergias)
        usuario.save();
        res.redirect('/diagnostico');

    },
};
    module.exports = controller;