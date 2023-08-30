function isSymmetricNumber(n) {
    // n is a 3-digit integer
    if(n < 0 || n>999 || !Number.isInteger(n)) return false;
    if(Math.floor(n/11) == 0) return true;
    else if(Math.floor(n/100)== (n%10)) return true;
    return false;
}
var num = Math.floor(Math.random()*(999-100+1)+100)
console.log(num);
console.log(isSymmetricNumber(num))