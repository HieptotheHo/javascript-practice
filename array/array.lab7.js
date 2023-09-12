const isAllPerfectNumbersV1 = (numberList) => {
    if(numberList.length===0) return false;
    for(let i = 0;i<numberList.length;i++) {
        if(!isPerfectNumber(numberList[i])) return false;
    }
    return true;
}

const isAllPerfectNumbersV2 = (numberList) => {
    if(numberList.length===0) return false;
    return numberList.length === numberList.reduce((accumulator,number) => {if(isPerfectNumber(number)) return accumulator+1;},0);
}

const isAllPerfectNumbersV3 = (numberList) => {
    if(numberList.length===0) return false;
    return numberList.every(isPerfectNumber);
}

const isPerfectNumber = (n) => {
    let sumOfDivisor = 0;
    for(let i = 1; i<=n/2;i++) {
        if(n%i==0) sumOfDivisor+=i;
    }
    return sumOfDivisor == n? true : false
}


numberList = [6,28]
console.log(isAllPerfectNumbersV1(numberList));
console.log(isAllPerfectNumbersV2(numberList));
console.log(isAllPerfectNumbersV3(numberList));