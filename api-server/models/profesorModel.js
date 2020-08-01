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
exports.getProfesores = function () {
  return new Promise(function (resolve, reject) {
    var query_str = "select * from profesor";
    con.query(query_str, function (err, rows, fields) {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
};

// get a specific alumno by id
exports.getAProfesorById = function (id) {
  console.log(id);
  return new Promise(function (resolve, reject) {
    var query_str = "SELECT * from profesor where  id = ? ";

    con.query(query_str, id, function (err, rows) {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
};


