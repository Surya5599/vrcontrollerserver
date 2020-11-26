var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000);
app.use(express.static('public'));
console.log("server is running");
var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send('running');
});

function newConnection(socket){

  console.log('new Connection: ' + socket.id);

  socket.on('phoneData', sendData);


  function sendData(data){
    //console.log("data:",data)
    socket.emit('phoneInfo"', data);
    //socket.broadcast.to(data.room).emit("userJoined", newData);
  }

}













