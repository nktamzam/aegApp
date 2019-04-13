const Tarea = require("../models/tareaModel");

exports.getAllTareas = (req, res) => {
  Tarea.find({}, (err, tareas) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición: ${err}` });
    if (!tareas) return res.status(404).send({ message: `No existen tareas` });
    res.status(200).send({ tareas: tareas });
  });
};

exports.updateTareaById = (req, res) => {
  let tareaId = req.params.id;
  Tarea.findOne({ _id: tareaId }, (err, tarea) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición: ${err}` });
    if (!tarea) return res.status(404).send({ message: `No existe ese tarea` });
    tarea.nombre = req.params.nombre;
    tarea.descripción = req.params.descripcion;
    tarea.estado = req.params.estado;
    tarea.save(function(err) {
      if (err) {
        res.send("fallo");
      }
      res.send("Tarea modificada correctamente");
    });
  });
};

exports.getTareaById = (req, res) => {
  let tareaId = req.params.id;
  Tarea.findOne({ _id: tareaId }, (err, tarea) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición: ${err}` });
    if (!tarea) return res.status(404).send({ message: `No existe ese tarea` });
    res.send({ tarea: tarea });
  });
};

exports.getTareaByNombre = (req, res) => {
  let reqNombre = req.params.nombre;
  Tarea.findOne({ nombre: reqNombre }, (err, tarea) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al realizar la petición: ${err}` });
    if (!tarea) return res.status(404).send({ message: `No existe ese tarea` });
    res.send({ tarea: tarea });
  });
};

exports.postTarea = (req, res) => {
  let nuevaTarea = new Tarea({
    nombre: req.params.nombre,
    descripción: req.params.descripcion,
    estado: req.params.estado
  });

  nuevaTarea.save(function(err) {
    if (err) {
      //return next(err);
      res.send("fallo");
    }
    res.send("Tarea creada correctamente");
  });
};

exports.delTareaById = (req, res) => {
  let tareaId = req.params.id;
  Tarea.findByIdAndRemove(tareaId, function(err) {
    if (err) {
      //return next(err);
      res.send("fallo");
    }
    res.send("Tarea eliminada correctamente");
  });
};
