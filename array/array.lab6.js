const hasPrimeV1 = (numberList) => {
    for(let i = 0; i <numberList.length;i++) {
        if(isPrime(numberList[i])) return false; 
    }
    return true;
}

const hasPrimeV2 = (numberList) => {
    let flag = true;
    numberList.forEach((ele)=> {
        if(isPrime(ele)) flag = false;
    })
    return flag;
}
const hasPrimeV3 = (numberList) => {
    if(!numberList.find((ele) => isPrime(ele))) return true;
    return false;
}
const hasPrimeV4 = (numberList) => {
    if(numberList.findIndex((ele) => isPrime(ele))==-1) return true;
    return false;
}
const hasPrimeV5 = (numberList) => {
    if(numberList.some(isPrime)) return false;
    return true;
}

function isPrime(n) {
    if(!(0<=n<1000 && Number.isInteger(n))) return -1;
    for(let i = 2; i<Math.sqrt(n);i++) {
        if(n%i==0) return false;
    }
    return true;
}

var numberList = [32,10,30,6,12];

console.log(hasPrimeV1(numberList));
console.log(hasPrimeV2(numberList));
console.log(hasPrimeV3(numberList));
console.log(hasPrimeV4(numberList));
console.log(hasPrimeV5(numberList));