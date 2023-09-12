const calcAvgOfAllEvenNumbers=(numberList) => {
    if(!(Array.isArray(numberList)) || numberList.length===0) return 0;

    return Math.ceil((numberList.reduce((sum,element)=> {
        return sum+=element;
    },0)) / numberList.length);
}

console.log(calcAvgOfAllEvenNumbers([]));
console.log(calcAvgOfAllEvenNumbers([1]));
console.log(calcAvgOfAllEvenNumbers([1, 2]));
console.log(calcAvgOfAllEvenNumbers([1, 2, 4]));