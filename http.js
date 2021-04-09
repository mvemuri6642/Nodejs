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
    res.end('error')
})
server.listen(5000);



/*
const http=require('http');
const server=http.createServer(function(req,res){
    console.log('req event');
    res.write('<h1>Welcome</h1><br><p>Good Afternoon</p>')
    res.end('Success');
})
server.listen(5000,function(){
    console.log('server listening');
})
*/