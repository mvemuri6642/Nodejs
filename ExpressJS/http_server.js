const http=require('http');
const EventEmitter=require('events');
const customEmitter=new EventEmitter();
const {readFileSync}=require('fs');
const homePage=readFileSync('./index.html','utf-8');
const style=readFileSync('./navbar-app/style.css','utf-8');
const js=readFileSync('./navbar-app/logic.js','utf-8');

//console.log(homePage)

const server=http.createServer();

server.on('request',function(req,res){
    
    url=req.url;
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage);
        res.end();
    }
    else if(url==='/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(style);
        res.end();
    }
    else if(url==='/logic.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(js);
        res.end();
    }
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write('hello');
        res.end();
    }

    else{
        res.writeHead(400,{'content-type':'text/html'})
        res.write('<h1>Oops!</h1><br><p>404 Not Found</p>')
        res.end();
    }
})
server.listen(80,function(){
    console.log('Server Listening on Port 80')
});
customEmitter.emit('request')

