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
});

// Alumno login
exports.doLoginAlumno = function (credenciales) {
  return new Promise(function (resolve, reject) {
    var query_str =
      "select nombre, password from alumno where nombre =" +
      "'" +
      credenciales.nombre +
      "'" +
      " and password=" +
      "'" +
      credenciales.password +
      "'";
    con.query(query_str, function (err, rows) {
      if (err) {
        return reject(err);
      }
      numRows = rows.length;
      valid = numRows > 0 ? true : false;
      response = { status: valid };
      resolve(response);
    });
  });
};
