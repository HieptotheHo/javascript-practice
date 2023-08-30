function sayHello(languageCode) {
    switch(languageCode) {
        case "en":
            return "Hello";
        case "vi":
            return "Xin chào";
        case "fr":
            return "Bonjour";
        case "cn":
            return "Nǐn hǎo";
        case "ja":
            return "Konnichiwa";
        case "ko":
            return "Anyoung haseyo";
        default: return "Hello"
    }
}

console.log(sayHello("cn"));
console.log(sayHello());