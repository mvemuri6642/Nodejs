const { json } = require('express');
const express=require('express');
const { toString } = require('lodash');
const app=express();
const path=require('path')

let {people}=require('./data.js')
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
/*
app.get('/',function(req,res){
    //res.status(200).send(people);
    res.sendFile(path.resolve(__dirname,'./methods-public/index.html'))
})
app.get('/style.css',function(req,res){
    res.sendFile(path.resolve(__dirname,'./methods-public/style.css'))
})
*/


app.post('/login',function(req,res){
    const {name}=req.body;
    res.header("conent-type","text/html")
    if(name){
        //res.send(people)
        res.send('<html><body><script>var par=document.createElement("P");par.innerHTML="Welcome '+name+' <br>How you doing?";document.body.append(par)</script></body></html>')

        console.log(name)
    }
    else{
        res.send('Error')
    }
})


app.listen(80,function(){
    console.log('Server Listening on Port 80')
})