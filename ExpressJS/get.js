const express=require('express')
const app=express();
const {people}=require('./data.js')


app.get('/api/people',function(req,res){
    //res.status(200).json({success:true})
    const{id}=req.query;
    if(id){
        const search=people.find(function(people){
            return people.id===Number(id)
        })
        res.send(JSON.stringify(search));
        //res.json(search)
    }
    else{
        res.send('404 Page Not Found')
    }
});


app.listen(80,function(){
    console.log('Server Listening on 80')
})

