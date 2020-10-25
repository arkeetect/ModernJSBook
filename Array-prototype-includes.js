let staticNames = Array(1).fill(['ahmed', 'muhammad']);

console.log(staticNames)
const faker = require("faker");
let staticZero = Array(1).fill(0).map((p) => faker.name.firstName() );
console.log(staticZero)

function generateNames(amount) {
    return Array(amount).fill(0).map(() => faker.name.firstName())
}

let names = generateNames(100);
//console.log(faker.name.firstName());
console.log(names);
names.push("Jessy");

// the indexOf way
if (names.indexOf("Jessy") >= 0) {
    console.log("Jessy exists");
} else {
    console.log("Jessy does not exist");
}

// the find way useful for non-primitives such as objects

if(names.find(n => n == "Jessy") != undefined) {
    console.log("Jessy exists");
} else {
    console.log("Jessy doesn't exist");
}

// Array.prototype.includes way

if(names.includes("Jessy")){
    console.log("Jessy exists");
} else {
    console.log("Jessy does not exist");
}



