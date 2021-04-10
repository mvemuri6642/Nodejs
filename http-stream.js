/*
const {writeFileSync}=require('fs')
for(let i=0;i<100000;i++){
    writeFileSync('./content/big.txt',`${i} : Hello World\n`,{flag:'a'})
}
*/

const http=require('http')
const fs=require('fs');

const server=http.createServer(function(req,res){
    const fileStream=fs.createReadStream('./content/big.txt','utf-8')
    fileStream.on('open',function(){
        fileStream.pipe(res)
    })
    fileStream.on('error',function(error){
        res.end(error)
    })
})
server.listen(5000,function(){
    console.log('server on')
})