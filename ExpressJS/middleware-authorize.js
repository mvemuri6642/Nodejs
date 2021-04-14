const express=require('express')
const app=express();
const logger=require('./logger.js')
const authorize=require('./authorize.js')
const morgan=require('morgan')

// we are using multiple middlewares logger and authorize
app.use(morgan('tiny'))

app.use(authorize,logger);
app.get('/',function(req,res){
    res.send('Valid')
    console.log(req.user)
})

app.get('/about',function(req,res){
    res.send('Manohar Vemuri')
})

app.get('/api/product',function(req,res){
    res.send('Manohar Vemuri')
})
app.get('/api/item',function(req,res){
    console.log(req.user)
    res.send('Manohar Vemuri')
})
app.listen(80,function(){
    console.log('Server Listening on port 80')
})