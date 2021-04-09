
console.log('first')
setTimeout(function(){
    console.log('second')
},0) //callback function executes after executing synchronous code
console.log('starting new task');

//first will execute first and then third because these are synchronous
