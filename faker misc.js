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



