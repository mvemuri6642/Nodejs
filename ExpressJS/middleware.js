const express=require('express')
const app=express();
const logger=require('./logger.js')



/* 
//middleware
const logger=function(req,res,next){
    const method=req.method
    const url=req.url
    const time=new Date().getFullYear();
    console.log(method,url,time)
    next()
}
*/
app.use(logger);
//app.use('/api',logger);
/*
//default middleware
app.get('/',logger,function(req,res){
    res.send('Homepage')
})
*/
app.get('/',function(req,res){
    res.send('Homepage')
})

app.get('/about',function(req,res){
    res.send('Manohar Vemuri')
})

app.get('/api/product',function(req,res){
    res.send('Manohar Vemuri')
})
app.get('/api/item',function(req,res){
    res.send('Manohar Vemuri')
})
app.listen(80,function(){
    console.log('Server Listening on port 80')
})