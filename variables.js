"use strict"

const stringValue = "this is a string"
console.log(typeof stringValue)

var numberValue = 48;
console.log(typeof numberValue)

let booleanValue = true
console.log(typeof booleanValue)
booleanValue = "this is a string"
console.log(booleanValue);

function doThis(){}
console.log(doThis instanceof Object)
console.log(Object(numberValue) === numberValue)
console.log(Object.getPrototypeOf(doThis));


