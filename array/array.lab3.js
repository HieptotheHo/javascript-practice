function getDivisorListV1(n) {
    const result = []
    for(let i = 0;i<=n/2;i++) {
        if(n%i===0) result.push(i);
    }
    result.push(n) //divisor as itself
    return result;
}

function getDivisorListV2(n) {
    return Array.from({length: n},(value,index)=>index+1).filter((element) => (n%element)===0)
}

function getDivisorListV3(n) {
    const divisors=[];
    let numbers = Array.from({length: n},(value,index)=>index+1);
    numbers.forEach((ele) => {if(n%ele===0) divisors.push(ele)} )

    return divisors;
}


console.log(getDivisorListV1(12))

console.log(getDivisorListV2(24))

console.log(getDivisorListV3(30))