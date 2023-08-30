function getMaxDigit(n) {
    if(Number.isInteger(n)==false ||  n <0 || n>=1000) return -1;
    let a = Math.floor(n/100);
    let b = Math.floor((n - a*100)/10);
    let c = n%10;
    
    return Math.max(a,b,c)    
}

console.log(getMaxDigit(789));