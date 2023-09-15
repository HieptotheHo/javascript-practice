function isSymmetricNumber(n) {
    if(n < 0 || n>999 || !Number.isInteger(n)) return false;
    // if(Math.floor(n/11) == 0) return true;
    if(Math.floor(n/10**(n.toString().length-1))== (n%10)) return true;
    return false;
}
var num = Math.floor(Math.random()*(999-100+1)+1)
console.log(num);
console.log(isSymmetricNumber(num))