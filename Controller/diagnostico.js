const diagnostico = require('../models/diagnostico');

var controller = {

    getPacientes: function(req,res){
        diagnostico.getAll(diagnostico => {
            res.render('/',{
                concentrado: paciente,
                pageTitle:'',
                path:'/diagnostico'
            });
        });
    },

    buscar: function(req,res){



    },

    guardar: function(req,res){
        
        var nombre = req.body.nombre;
        var edad = req.body.edad;
        var sintomas = req.body.sintomas;
        var recomendaciones = req.body.recomendaciones;
      

        var diagnostico = new diagnostico (nombre, edad, sintomas, recomendaciones)
        usuario.save();
        res.redirect('/diagnostico');

    },
};
    module.exports = controller;