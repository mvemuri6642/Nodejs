const{readFile,writeFile}=require('fs').promises;





const start=async()=>{
    try {
        const first =await readFile('./content/first.txt','utf-8');
        const second=await readFile('./content/second.txt','utf-8');
        writeFile('./content/resultasync.txt',
        `Asynchronous:${first},${second}\n`,{flag:'a'})
        console.log(first+'\n'+second);
        
    } catch (error) {
        console.log(error)
        
    }
}
start();




/*
const{readFile,writeFile}=require('fs')
const util=require('util')
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)

const start=async()=>{
    try {
        const first =await readFilePromise('./content/first.txt','utf-8');
        const second=await readFilePromise('./content/second.txt','utf-8');
        writeFilePromise('./content/resultasync.txt',`\nAsynchronous:${first},${second}`,{flag:'a'})
        console.log(first+'\n'+second);
        
    } catch (error) {
        console.log(error)
        
    }
}
start();
*/



/*
const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',function(err,data){
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        
        })



    })
}
*/
// getText('./content/first.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))

/*
const start=async()=>{
    try {
        const first = await getText('./content/first.txt');
        const second=await getText('./content/second.txt');
        console.log(first,second)
        
    } catch (error) {
        console.log(error);
    }
    
}
start()

*/
