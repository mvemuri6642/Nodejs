//Modules

const names=require('./names');
const fun=require('./utils');
const alternative=require('./alternative-flavor')
require('./mind-grenade');
console.log(alternative);
fun('manohar');
fun(names.teja);
fun(names.seshu); 

/*
const fun=(name)=>{
    console.log(`hello ${name}`)
}

fun('manohar')
fun(teja)
*/