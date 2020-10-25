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

function getDisplayTime(runStat, extendedFormat=false){
    if (Object.keys(runStat).indexOf("time") < 0) {
        return "00:00:00";
    }
    return extendedFormat ? Object.entries(runStat.time).map(pair => `${pair[1]} ${pair[0].charAt(0)}`).join(" ")
                          : Object.values(runStat.time).join(":")
}

console.log(getDisplayTime(runStat))
console.log(getDisplayTime(runStat, true))
console.log(getDisplayTime({
    distance:3.5,
    calories: 240
}))