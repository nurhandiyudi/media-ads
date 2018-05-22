function socket(io){
  var express = require('express');
  var router = express.Router();
  
  io.on('connection', function(socket){
      io.emit('Online');
  });
  io.on('disconnection', function(socket){
      io.emit('Offline');
  });
}

module.exports = socket