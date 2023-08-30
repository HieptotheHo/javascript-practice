const isAllPerfectNumbersV1 = (numberList) => {
    for(let i = 0;i<numberList.length;i++) {
        if(!isPerfectNumber(numberList[i])) return false;
    }
    return true;
}

const isAllPerfectNumbersV2 = (numberList) => {
    let perfectNumCounter = numberList.reduce((accumulator,ele) => {if(isPerfectNumber(ele)) return accumulator+1;},0)
    console.log(perfectNumCounter)
    return perfectNumCounter == numberList.length? true : false;
}

const isAllPerfectNumbersV3 = (numberList) => {
    if(numberList.every(isPerfectNumber)) return true;
    return false;
}

const isPerfectNumber = (n) => {
    let sumOfDivisor = 0;
    for(let i = 1; i<=n/2;i++) {
        if(n%i==0) sumOfDivisor+=i;
    }
    return sumOfDivisor == n? true : false
}


numberList = [6,6,28]
console.log(isAllPerfectNumbersV1(numberList));
console.log(isAllPerfectNumbersV2(numberList));
console.log(isAllPerfectNumbersV3(numberList));