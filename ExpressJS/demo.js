const express =require('express')
const path=require('path')
const app=express()

app.use(express.static('./public'))
/*
app.get("/",function(req,res){
    //res.send('Hello World');
    res.sendFile(path.resolve(__dirname,'./index.html'))
})
*/

app.get("/about",function(req,res){
    res.sendFile(path.resolve(__dirname,'./index.html'))
})
app.all('*',function(req,res){
    res.status(200).send('<h1>Page not found</h1>')

})


app.listen(80,function(){
    console.log('Server is listening on port 80');
});