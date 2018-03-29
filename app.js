var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
io.set('origins', '*:*');

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

app.get('/open', function(req, res){
	if(req.query.l) io.emit("link:open", req.query.l);
	if(req.query.y) io.emit("youtube:open", req.query.y);
  res.send("done");
});

app.get('/close', function(req, res){
	io.emit("clear")
  res.send("done");
});

io.on('connection', function(socket){
  console.log('a user connected');
});


io.on('disconnect', function(socket){
  console.log('a user connected');
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});