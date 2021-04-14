const { json } = require('express');
const express=require('express')
const app=express();
const {product}=require('./data.js')
app.get('/',function(req,res){
    res.send('<h1>Homepage</h1><br><a href="/api/products">Products</a>')
})
/*
// Get all JSON DATA
app.get('/api/products',function(req,res){
    const newProd=product.map(function(product){
        const{id,name,image}=product;
        return {id,name,image};
    })
    res.json(newProd);
})
*/
//GET SINGLE ITEM FROM JSON

app.get('/api/products/:prodID',function(req,res){
    //const singleProd=product.find((product)=>product.id===1)
    const {prodID}=req.params;
    const singleProd=product.find(function(product){
        return product.id===Number(prodID);
    })
    if(!singleProd){
        res.status(404).send(`<center><h1>${res.status(404).statusCode} Page not found</h1></center>`)
        
    }
    else{
        res.send(`<h1>${singleProd.name}</h1><br><img src=${singleProd.image} width="250" height="250"></img><br><p>Price : Rs ${singleProd.price}/-</p><br><p>Description:<br>${singleProd.desc}</p>`)
    }
    //res.json(singleProd)
})

//multiple parameters
/*
app.get('/api/products/:prodID/name/:prodName',function(req,res){
    
    const {prodID,prodName}=req.params;
    console.log(prodID);
    const singleProd=product.find(function(product){
        return product.id===prodID,product.name=prodName;
    })
    console.log(singleProd)
    res.send('hello world')
})
*/


app.listen(80,function(){
    console.log(`Server listening on port 80`)
})