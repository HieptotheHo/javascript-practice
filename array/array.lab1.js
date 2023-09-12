function createArrayInRangeV1(a, b) {
    const result = [];
    if(a>b || a<-100 || b>100) return [];
    for(let i = a; i <=b;i++) {
        result.push(i);
    }
    return result;
}

console.log(createArrayInRangeV1(-13,20))

function createArrayInRangeV2(a,b) {
    return Array.from({length:b-a+1}, (value,index)=> index + a)
}

console.log(createArrayInRangeV2(-10,10))
