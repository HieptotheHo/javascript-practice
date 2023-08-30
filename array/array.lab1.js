function createArrayInRangeV1(a, b) {
    let tempArr = [];
    if(!(a<b && a > -100 && b <100)) return -1;
    for(let i = a; i <=b;i++) {
        tempArr.push(i);
    }
    return tempArr;
}

console.log(createArrayInRangeV1(-13,20))

function createArrayInRangeV2(a,b) {
    return Array.from({length:b-a+1}, (value,index)=> index + a)
}

console.log(createArrayInRangeV2(-10,10))
