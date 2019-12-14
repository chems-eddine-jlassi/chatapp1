var app = require ('express') ();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/',function(req,res){
res.sendFile(__dirname + '/ind.html');

});
io.on('connection',function(socket){
	socket.on('chat message',function(msg){
		io.emit('chat message' , msg);
	});

});
http.listen(3000,function(){
	console.log('listening to port 3000');
})