console.log('start');
const {readFile,writeFile}=require('fs');

 readFile('./content/first.txt','utf-8',function(err,result){
     if(err){
         console.log(err);
         return;
     }
     const first=result;
     readFile('./content/second.txt','utf-8',function(err,result){
         if(err){
             console.log(err);
             return;
         }
         const second=result;
         writeFile('./content/resultasync.txt',`Result:${first},${second}`,{flag:'a'},(err,result)=>{
             if(err){
                 console.log(err);
                 return;
             }
             console.log('done with this task');
         });

     })
 })



readFile('./content/resultasync.txt','utf-8',function(err,result){
    if(err){
        console.log(err);
        return;
    }

    console.log(result);
});
console.log('starting next task');