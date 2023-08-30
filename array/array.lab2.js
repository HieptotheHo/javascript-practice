function isPrime(n) {
    if(!(0<=n<1000 && Number.isInteger(n))) return -1;
    for(let i = 2; i<Math.sqrt(n);i++) {
        if(n%i==0) return false;
    }
    return true;
}

console.log(isPrime(2));
console.log(isPrime(46));
console.log(isPrime(19));