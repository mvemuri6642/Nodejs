const authorize=function(req,res,next){
    console.log('authorize');
    const {user}=req.query;
    if(user==='manu'){
        req.user={name:'m',id:6642}
        next();
    }
    else{
        console.log('not')
        res.send('invalid')
    }
    
}
module.exports=authorize;