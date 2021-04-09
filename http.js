const http=require('http');
/*
const {readFile,writeFile}=require('fs');
readFile('./content/first.txt','utf-8',function(err,result){
    if(err){
        console.log(err);
        return;
    }
    const server=http.createServer(function(req,res){
        res.write(result);
        res.end();
    })
    server.listen(5000);
    console.log(result);
});

*/
const server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.end('welcome to our homepage');
    }
    if(req.url=='/about'){
        res.end('here is the short story');
    }
    res.end(`<h1>Oops!</h1><br>
    <p>The page you're looking for is not found</p><br>
    <a href="/">redirect</a>`);
})
server.listen(5000);