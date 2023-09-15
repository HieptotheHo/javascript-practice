function getMaxDigit(n) {
    if(Number.isInteger(n)==false ||  n <0 || n>=1000) return -1;
    let hundreds = Math.floor(n/100);
    let tens = Math.floor((n - hundreds*100)/10);
    let units = n%10;
    
    return Math.max(hundreds,tens,units)    
}

console.log(getMaxDigit(685));