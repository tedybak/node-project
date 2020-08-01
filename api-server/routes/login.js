var Alumnos = require("../models/loginModel"); 
const loginRoutes = (app, fs) => {
    // index
    app.post("/login", (req, res) => {
         const credenciales = req.body;
        Alumnos.doLoginAlumno( credenciales).then(function (rows) {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(rows));             
          });
    });   
  };
  
  module.exports = loginRoutes;