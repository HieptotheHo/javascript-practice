function extractDomainV1(email) {
    return email.split("@")[1];
}

function extractDomainV2(email) {
    return email.slice(email.indexOf('@')+1)
}

console.log(extractDomainV1('alice@gmail.com'))
console.log(extractDomainV2('bob@abc.com'));
