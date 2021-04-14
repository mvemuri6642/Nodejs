const { json } = require('express');
const express=require('express')
const app=express();
const {product}=require('./data.js')

/*
app.get('/api/v1/query',function(req,res){
    const userData=req.query;
    res.send('Hello World')
    console.log(userData)

})
*/

app.get('/api/v1/query',function(req,res){
    const {search,limit}=req.query;
    var max=4
    let sortProd=[...product]
    if(search){
        sortProd=sortProd.filter(function(product){
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortProd=sortProd.slice(0,Number(limit))
    }
    
    for(let i=0;i<max;i++){
        //return res.send(`${sortProd[0]['image']}`)
        //cannot send multiple http responses so we use return
        // this returns the last value in  order

        return res.send(`<img src=${sortProd[0]['image']}></img>`)
    }
    
    //res.send(`<img src=${sortProd[0]['image']}></img>`)
    //res.send('hello')
    
    //res.send(`<h1>${sortProd.id}</h1><br><img src="${sortProd.image}"><img>`)
})

app.listen(80,function(){
    console.log('Server Listening on port 80');
})