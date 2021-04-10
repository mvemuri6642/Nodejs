const http=require('http')
const server=http.createServer();

server.on('request',function(req,res){
    res.end('<h1 style="color:white;background-color:grey;"><center>Welcome</center></h1><br>'+
        '<h4 style="float:right;">Manohar Vemuri</h4>');

})
server.listen(5000)

const EventEmitter=require('events')
const customEmitter=new EventEmitter();

customEmitter.emit('request')