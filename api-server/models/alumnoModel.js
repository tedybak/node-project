var mysql = require("mysql");
var set = require("../settings/settings");

var con = mysql.createConnection({
  host: set.getHost(),
  user: set.getUser(),
  password: set.getPassword(),
  database: set.getDatabase(),
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//get all alumnos
exports.getAlumnos = function () {
  return new Promise(function (resolve, reject) {
    var query_str = "select * from alumno";
    con.query(query_str, function (err, rows, fields) {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
};

// get a specific alumno by id
exports.getAlumnosById = function (id) {
  console.log(id);
  return new Promise(function (resolve, reject) {
    var query_str = "SELECT * from alumno where  id = ? ";

    con.query(query_str, id, function (err, rows) {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
};

exports.getAlumnosNotasById = function (id) {
  console.log(id);
  return new Promise(function (resolve, reject) {
    var query_str =
      "SELECT alumno.nombre,alumno.apellidos, asignatura.nombre_curso, notas.nota FROM `notas` inner join asignatura on notas.asignatura_id = asignatura.id inner join alumno on alumno.id = notas.id_alumno and notas.id_alumno = ? ";

    con.query(query_str, id, function (err, rows) {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
};
