// single thread in browser
// V8 for Chrome - spider monkey for firefox, Chakra for Edge
// stack, heap, event loop, API

const runStat = {
    distance: 10.2,
    time: {
        hours: 0,
        minutes: 54,
        seconds: 32
    },
    calories: 590
}

console.log(Object.keys(runStat));
console.log(Object.keys(runStat.time))
console.log(Object.values(runStat))

console.log(Object.entries(runStat.time))