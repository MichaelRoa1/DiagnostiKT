const Paciente = require('../models/usuario');

var controller = {

    getPacientes: function(req,res){
        Paciente.getAll(usuario => {
            res.render('usuario/registro',{
                concentrado: paciente,
                pageTitle:'',
                path:'/usuario'
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
      

        var usuario = new usuario (nombre, edad, sintomas, alergias)
        usuario.save();
        res.redirect('/usuario');

    },
};
    module.exports = controller;