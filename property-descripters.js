"use strict"
const runStat = {
    distance: 10.2,
    time: {
        hours: 0,
        minutes: 54,
        seconds: 32
    },
    calories: 590
};

const distancePropertyDescriptor1 = Object.getOwnPropertyDescriptor(runStat, "distance");
console.log(distancePropertyDescriptor1);

Object.defineProperty(runStat, "distance", {
    configurable:true,
    enumerable: false,
    writable: false,
    value:10.2
});

// since writeable is set to false, we should not be able to change distance if strict mode is set at the top of the file
// with "use strict"

runStat.distance = 14 

const distancePropertyDescriptor2 = Object.getOwnPropertyDescriptor(runStat, "distance");
console.log(distancePropertyDescriptor2)
// now distance will not show up in Object.keys (enumerable property set to false)
// only ['time, 'calories'] are returned. distance property is not returned
console.log(Object.keys(runStat))

