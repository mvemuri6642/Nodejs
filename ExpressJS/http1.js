console.log('Welcome')
/*
HTTP RESPONSE STATUS CODES

Informational responses (100–199)
Successful responses (200–299)
Redirects (300–399)
Client errors (400–499)
Server errors (500–599)
*/


const http=require('http');
const {readFileSync}=require('fs');
const homePage=readFileSync('./index.html','utf-8')


const server=http.createServer(function(req,res){
    //console.log(req.url);
    //console.log(req.method)
    res.writeHead(200,{'content-type':'text/html'})
    const url=req.url;
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end();
    }
    else if(url==='/contact'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Manohar Vemuri</h1>')
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page not Found</h1>')
        res.end();
    }
    
    //res.end('<h1>Welcome</h1>');
})
server.listen(80,function(){
    console.log('Server Listening on Port 80..')
})