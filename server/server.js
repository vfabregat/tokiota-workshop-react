var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var cors = require('cors');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var api = express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

/* API */
api.post('/login', function(req, res){
    res.json({
        success: true,
        username: req.body.username
    });
});
app.use('/api', api);

/* SOCKET */

io.on('connection', function(socket){
    socket.on('message:send', function(message){
        io.sockets.emit('message:spread', message);
    });
});

http.listen(port, function(){
    console.log("Server running and listeng on: http://localhost:%s/api", port);
});
