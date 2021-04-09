const EventEmitter =require('events')
const customEmitter=new EventEmitter()

customEmitter.on('response',()=>{
    console.log(`data received `)
});
customEmitter.on('response',function(name,age){
    console.log(`name: ${name} , age: ${age}`)

})
customEmitter.on('res',(name,age)=>{
    console.log(`${name} is ${age} years old`);

})
customEmitter.emit('response','Manohar','20')
customEmitter.emit('res','Manohar','20')