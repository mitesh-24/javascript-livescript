"use strict"

//number -> range = 2^53
//bigint
//string -> ""
//Boolean -> true/false
//null -> standalone value
//undefined -> 
//symbol -> uniques

//object

let num = 45
console.log(typeof(num))
let str = String(num)    //type conversion
console.log(str)
console.log(typeof(str))

console.log(typeof null) 
// When you use typeof null, it returns "object." This is considered a historical mistake in JavaScript.
console.log(typeof undefined) 