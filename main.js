
var config = require('./config.js');
var mysql = require('mysql');
var express = require('express');
var fs = require('fs');



//Connect to database via Config info
var database = mysql.createPool({
    connectionLimit: 175,
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.pass,
    database: config.mysql.database,
    charset: 'utf8_general_ci'
});

database.getConnection(function(err, connection) {
    if(err) console.log(err);
    console.log(connection)
  });

/*var options = {
    key: fs.readFileSync('ssl.key'),
    cert: fs.readFileSync('ssl.crt'),
    requestCert: false
};*/

var app = express();
var server = require('http').createServer(app);
var socket = require('socket.io').listen(server);
server.listen(8443, '0.0.0.0');

console.log('Server up and running at %s port', config.socketport);

socket.on('connection', function(socket){
    console.log('is connected');
    database.query('SELECT `msg` FROM `message` WHERE id = 1', function(err, row) {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(row)
        var message = row[0].msg
        socket.emit('test',  message);
    })

});




