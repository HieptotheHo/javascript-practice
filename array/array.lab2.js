function isPrimeV1(n) {
    if(n<0 || n>=1000 || !Number.isInteger(n)) return false;
    for(let i = 2; i<n-1;i++) {
        if(n%i===0) return false;
    }
    return true;
}

function isPrimeV2(n) {
    if(n<0 || n>=1000 || !Number.isInteger(n)) return false;
    for(let i = 2; i<Math.sqrt(n);i++) {
        if(n%i===0) return false;
    }
    return true;
}

console.log(isPrimeV1(2));
console.log(isPrimeV2(46));
console.log(isPrimeV1(19));