"use strict"
//let myArr = new Array();
let myArr =  [
    {here: 'this is first element'}, {here: 'this is second element'} ];
console.log(myArr);
console.log(Object.values(myArr))


const runStat = {
    time: {
        hours: 0,
        minutes: 54,
        seconds: 32
    }
};
Object.defineProperty(runStat, "distance", {
    configurable: true,
    enumerable:true,
    //writable:true,
    get: function() {
        return this._distance;
    },
    set: function(value){
        this._distance = value;
        this._calories = value * 40;
    }
   
});

Object.defineProperty(runStat, "calories", {
    configurable: true,
    enumerable:true,
    //writable:false,
    get: function() {
        return this._calories;
    },
    // NO SETTER
    
   
});



runStat.distance = 48;
console.log(runStat.distance);
console.log(runStat.calories);

console.log(Object.keys(runStat))



