const isPerfectNumber = (n) => {
    let sumOfDivisor = 0;
    for(let i = 1;i<=n/2;i++) {
        if(n%i===0) sumOfDivisor+=i;
    }
    return sumOfDivisor == n? true : false;
}

console.log(isPerfectNumber(6))
console.log(isPerfectNumber(28))

