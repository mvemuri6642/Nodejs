const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        setTimeout(()=>{
            console.log('Hello')
        },10000)
        res.end('Homepage');
    }
    else if(req.url==='/about'){
        //blocking code and Synchronous
        for(let i=0;i<10;i++){
            for(let j=0;j<100;j++){
                console.log(`${i},${j}`);
            }
        }
        res.end('About Page')
    }
    else{
        res.end('Error')
    }


})
server.listen(5000,()=>{
    console.log('server is listening on 5000...')
})