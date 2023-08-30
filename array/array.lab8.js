const calcAvgOfAllEvenNumbers=(numberList) => {
    if(!(Array.isArray(numberList)) || numberList.length==0) return 0;

    let sum = 0;
    numberList.forEach((ele) => sum+=ele);
    return Math.round(sum/numberList.length);
}

console.log(calcAvgOfAllEvenNumbers([]));
console.log(calcAvgOfAllEvenNumbers([1]));
console.log(calcAvgOfAllEvenNumbers([1, 2]));
console.log(calcAvgOfAllEvenNumbers([1, 2, 4]));