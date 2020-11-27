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
  socket.on('select', selectData);
  socket.on('squeeze', squeezeData);
  socket.on('reset', resetData);
  socket.on('position', positionData);
  
  function positionData(data){
    //console.log("data:",data)
    io.sockets.emit('positionData', data);
    //socket.broadcast.to(data.room).emit("userJoined", newData);
  }

  function sendData(data){
    //console.log("data:",data)
    io.sockets.emit('phoneInfo', data);
    //socket.broadcast.to(data.room).emit("userJoined", newData);
  }
  
  function selectData(data){
    //console.log("data:",data)
    io.sockets.emit('select', data);
    //socket.broadcast.to(data.room).emit("userJoined", newData);
  }
  
  function squeezeData(data){
    //console.log("data:",data)
    io.sockets.emit('squeeze', data);
    //socket.broadcast.to(data.room).emit("userJoined", newData);
  }
  
  function resetData(data){
    //console.log("data:",data)
    io.sockets.emit('reset', data);
    //socket.broadcast.to(data.room).emit("userJoined", newData);
  }

}













