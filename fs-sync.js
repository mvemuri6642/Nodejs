const {readFileSync,writeFileSync}=require('fs');
const fs=require('fs');
console.log('start');
const first=readFileSync('./content/first.txt','utf-8');
const second=fs.readFileSync('./content/second.txt','utf-8');
console.log(first);
console.log(second);
console.log("Second file: "+fs.readFileSync('./content/second.txt','utf-8'));

writeFileSync('./content/result.txt',`hello world:${first},${second}`);
writeFileSync('./content/result.txt',`Hey Everyone: ${first},${second}`,{flag:'a'});
console.log('result after writing to a file:\n'+fs.readFileSync('./content/result.txt','utf-8'));

console.log('done with the task');
console.log('starting next one');

