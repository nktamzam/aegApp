const Tarea = require('../models/tareaModel');

exports.getAllTareas = (req, res) => {
    Tarea.find({}, (err, tareas) => {
        if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if(!tareas) return res.status(404).send({message: `No existen tareas`});
        res.status(200).send({tareas: tareas});
    });
};

exports.getTareaById = (req, res) => {
    let tareaId = req.params.id;
    Tarea.findOne({_id: tareaId}, (err, tarea) => {
        if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if(!tarea) return res.status(404).send({message: `No existe ese tarea`});
        res.send({tarea: tarea});
    });
};

exports.postTarea = (req, res) => {
        let nuevaTarea = new Tarea (
            {   
            nombre: 'tareanew2',
            descripción: 'descripciosn larga ffsffsfs',
            estado: true
            }
        );

        nuevaTarea.save(function (err) {
            if (err) {
                //return next(err);
                res.send('fallo')
            }
            res.send('Tarea creada correctamente')
        })
    };


