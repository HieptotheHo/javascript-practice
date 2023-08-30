function isSecureUrlV1(url) {
    if(url.indexOf('https')==0 || url.indexOf('wss')==0) return true;
    return false;
}

console.log(isSecureUrlV1('https://ezfrontend.com'));
console.log(isSecureUrlV1('wss://chat.ezfrontend.com'));
console.log(isSecureUrlV1('ws://chat.abc.com'));

console.log('<------------->')

function isSecureUrlV2(url) {
    return url.startsWith('https') || url.startsWith('wss') ? true : false;
}

console.log(isSecureUrlV2('https://ezfrontend.com'));
console.log(isSecureUrlV2('wss://chat.ezfrontend.com'));
console.log(isSecureUrlV2('ws://chat.abc.com'));