var exports = (module.exports = {});

var host = "127.0.0.1";
var user = "root";
var password = "Estocolmo1";
var database = "universidadb";

exports.getHost = function () {
  return host;
};

exports.getUser = function () {
  return user;
};

exports.getPassword = function () {
  return password;
};

exports.getDatabase = function () {
  return database;
};
