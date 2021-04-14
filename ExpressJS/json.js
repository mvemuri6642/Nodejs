const express=require('express')
const app=express();
const path=require('path')


const {product}=require('./data.js');



/*
//  Passing JSON DATA
app.get('/',function(req,res){
    res.json([
        {
            name:'manohar',
            email:'saimanoharvemuri333@gmail.com'
        },
        {
            name:'teja',
            email:'tejavemuri123@gmail.com'
        }
    ])
    
})
*/


app.get('/',function(req,res){
    res.json(product);
})
app.listen(80,function(){
    console.log(`Server is listening on port 80`)
})