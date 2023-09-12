const transformNumbersV1 = (a) => {
    //Empty input
    if(a.length<=1) return a;

    const b = []
    
    for(let i = 0;i<a.length;i++) {
        if(i===0) b[i] = a[i+1];
        else if(i===a.length-1) b[i] = a[i-1];
        else b[i] = a[i-1] + a[i+1];
    }
    return b;
}
const transformNumbersV2 = (a) => {
    const b = []
    a.forEach((item,i,a) => {
            if(i===0) b[i] = a[i+1];
            else if(i===a.length-1) b[i] = a[i-1];
            else b[i] = a[i-1] + a[i+1];
        }
    );
    return  b;
}

const transformNumbersV3 = (a) => {
    return a.map((item,i,a) => {
        if(i===0) return a[i+1];
        else if(i===a.length-1) return a[i-1];
        else return a[i-1] + a[i+1];
    });
}
console.log(transformNumbersV1([1,2,3,4]));
console.log(transformNumbersV2([3,6,2,9]));
console.log(transformNumbersV3([4,7,1,8]));

