transformNumbersV1 = (a) => {
    let b = []
    for(let i = 0;i<a.length;i++) {
        if(i==0 || i==a.length-1) b[i] = a[i];
        else b[i] = a[i-1] + a[i+1];
    }
    return b;
}
transformNumbersV2 = (a) => {
    let b = []
    a.forEach((ele,i,a) => {
            if(i==0 || i==a.length-1) b[i] = a[i];
            else b[i] = a[i-1] + a[i+1];
        }
    );
    return  b;
}

transformNumbersV3 = (a) => {
    let b = a.map((ele,i) => {
        if(i==0 || i == a.length-1) return a[i];
        else return a[i-1] + a[i+1];
      });
    return b;
}
console.log(transformNumbersV1([1,2,3,4]));
console.log(transformNumbersV2([3,6,2,9]));
console.log(transformNumbersV3([4,7,1,8]));

