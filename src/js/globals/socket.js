var URI = require('./uri');
var socket = require('socket.io-client')(URI.base);

module.exports = socket;
