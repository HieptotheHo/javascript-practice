function findSecret(code) {
    let decodedStr ='';

    for(let i = 0; i < code.length;i++) {
        if(code[i].toLowerCase()==code[i]) decodedStr+=code[i];
    
    }
    return decodedStr;

}

console.log(findSecret('eaABFHsyUEYSJfrontJSKJSHend'))