var Alumno = require("../models/alumnoModel");
var Notas = require("../models/notasModel");
var Profesor = require("../models/profesorModel"); 

const alumnosRoutes = (app, fs) => {

  // index
  app.get("/", (req, res) => {
    res.send("welcome to the development api-server");
  });

  // get all notes
   app.get("/notas", (req, res) => {
    Notas.getNotas().then(function (rows) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(rows));
    });
  });


  // specific notes by specific Id

  app.get("/notas/:id", function (req, res) {
    req._params = req._params || {};
    for (var key in req.params) {
      if (req.params.hasOwnProperty(key)) {
        req._params[key] = req.params[key];
      }
    }
    id = req._params.id;

    Notas.getNotasById(id).then(function (rows) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(rows));
    });
  });




  // get all alumnos
  app.get("/alumnos", (req, res) => {
    Alumno.getAlumnos().then(function (rows) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(rows));
    });
  });

  // specific notes by specific Id

  app.get("/alumnos/:id", function (req, res) {
    req._params = req._params || {};
    for (var key in req.params) {
      if (req.params.hasOwnProperty(key)) {
        req._params[key] = req.params[key];
      }
    }
    id = req._params.id;

    Alumno.getAlumnosById(id).then(function (rows) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(rows));
    });
  });


  app.get("/alumnos/:id/notas", function (req, res) {
    req._params = req._params || {};
    for (var key in req.params) {
      if (req.params.hasOwnProperty(key)) {
        req._params[key] = req.params[key];
      }
    }
    id = req._params.id;

    Alumno.getAlumnosNotasById(id).then(function (rows) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(rows));
    });
  });


  // Profesores

  app.get("/profesores", (req, res) => {
    Profesor.getProfesores().then(function (rows) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(rows));
    });
  });

  app.get("/profesores/:id", function (req, res) {
    req._params = req._params || {};
    for (var key in req.params) {
      if (req.params.hasOwnProperty(key)) {
        req._params[key] = req.params[key];
      }
    }
    id = req._params.id;

    Profesor.getAProfesorById(id).then(function (rows) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(rows));
    });
  });

};

module.exports = alumnosRoutes;
