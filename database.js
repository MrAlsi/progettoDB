//Modulo per la connessione al server mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'progettodb',
    user: 'root',
    password: 'password'
});

module.exports = connection;