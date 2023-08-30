function formatSecondsV1(seconds) {
    if(!(0<=seconds<60)) return seconds
    if(seconds >= 10) {
        return `\'${seconds}\'`;
    } else {
        return `\'0${seconds}\'`;
    }

}   

console.log(formatSecondsV1(12));
console.log(formatSecondsV1(1));

function formatSecondsV2(seconds) {
    if(!(0<=seconds<60)) return seconds
    return `\'${('0'+seconds.toString()).slice(-2)}\'`;
}   

console.log(formatSecondsV2(12));
console.log(formatSecondsV2(1));