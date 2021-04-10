/*
const {writeFileSync}=require('fs')
for(let i=0;i<10000;i++){
    writeFileSync('./content/big.txt',`${i} : Hello World\n`,{flag:'a'})
}
*/
//default 64kb
const {createReadStream}=require('fs')
const stream=createReadStream('./content/big.txt',{hightWaterMark:9000});
//const stream=createReadStream('./content/big.txt',{hightWaterMark:90000,encoding:'utf-8'});

stream.on('data',function(result){
    console.log(result);
})
stream.on('error',function(error){
    console.log(error);
})